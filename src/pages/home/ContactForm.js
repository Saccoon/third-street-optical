// React \\
import React, { Component, Fragment } from 'react'

// Styled Components \\
import Button from "../../components/button/Button"
import { Input, Contact, FormGroup, Error, ErrorPopup, Close } from "./Input"

class ContactForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: "",
			nameError: false,
			email: "",
			emailError: false,
			phone: "",
			phoneError: false,
			showErrorPopup: false,
			submitted: false
		}
	}

	setName = name => {
		this.setState({
			name: name
		}, () => {
			if(name !== "" && name !== null) {
				this.setState({
					nameError: false
				})
			} else {
				this.setState({
					nameError: true
				})
			}
		})
	}

	setEmail = email => {
		var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		this.setState({
			email: email
		}, () => {
			if(emailRegex.test(String(email).toLowerCase()) === false) {
				this.setState({
					emailError: true
				})
			} else {
				this.setState({
					emailError: false
				})
			}
		})
	}

	setPhone = phone => {
		var phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
		this.setState({
			phone: phone
		}, () => {
			if(phoneRegex.test(String(phone).toLowerCase()) === false) {
				this.setState({
					phoneError: true
				})
			} else {
				this.setState({
					phoneError: false
				})
			}
		})
	}

	submitForm = async() => {
		const { name, email, phone } = this.state
		await Promise.all([
			this.setName(name),
			this.setEmail(email),
			this.setPhone(phone)
		])
		const { nameError, emailError, phoneError } = this.state
		if( nameError === false && emailError === false && phoneError === false) {
			this.setState({
				submitted: true
			})
		} else {
			this.showErrorPopup()
		}
	}

	showErrorPopup = () => {
		this.setState({
			showErrorPopup: true
		}, () => {
			setTimeout(() => {
				this.setState({
					showErrorPopup: false
				})
			}, 5000)
		})
	}

	hideErrorPopup = () => {
		this.setState({
			showErrorPopup: false
		})
	}

  render() {

	const { name, nameError, email, emailError, phone, phoneError, showErrorPopup, submitted } = this.state

    return (
		<Contact>
			{ showErrorPopup
				&& <ErrorPopup>
					<Close onClick={this.hideErrorPopup}>X</Close>
					Please Fix Form Errors Before Submitting Form!
				</ErrorPopup>
			}
			{ submitted
				? <Fragment>
					<h3>Submitted Form!</h3>
					<p>We will be in contact with you soon. Thank you and have a wonderful day.</p>
				</Fragment>
				: <Fragment>
					<FormGroup>
						<h3>Name :</h3>
						<Input
							value={name}
							onChange={event => this.setName(event.target.value)}
							type="text"
							placeholder="Full Name" />
						{ nameError
							&& <Error>Please Enter a Valid Name</Error>
						}
					</FormGroup>
					<FormGroup>
						<h3>Email :</h3>
						<Input
							value={email}
							onChange={event => this.setEmail(event.target.value)}
							type="text"
							placeholder="example@example.com" />
						{ emailError
							&& <Error>
								Please Enter a Valid Email Address,<br />
								Ex:) example@example.com
							</Error>
						}
					</FormGroup>
					<FormGroup>
						<h3>Phone :</h3>
						<Input
							value={phone}
							onChange={event => this.setPhone(event.target.value)}
							type="text"
							placeholder="(444)444-4444" />
						{ phoneError
							&& <Error>
								Please Enter a Valid Phone Number,<br />
								Ex:) (444)444-4444
							</Error>
						}
					</FormGroup>
					<Button action={this.submitForm}>SUBMIT</Button>
				</Fragment>
			}
		</Contact>
    )
  }
}

export default ContactForm
