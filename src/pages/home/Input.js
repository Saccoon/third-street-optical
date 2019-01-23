import styled from 'styled-components'

export const Input = styled.input`
	background: white;
	border: none;
	border-radius: 5px;
	padding: 10px;
	font-size: 16pt;
`

export const Contact = styled.div`
	background: #A25F7F;
	display: grid;
	padding: 40px;
	border-radius: 20px;
	h3 {
	text-align: left;
	color: white;
	margin: 0 0 5px 0;
	}
`

export const FormGroup = styled.div`
	margin: 0 0 20px 0;
`

export const Error = styled.p`
	color: white;
	font-size: 10pt;
`

export const ErrorPopup = styled.div`
	background: #5B6FA8;
	color: aliceblue;
	padding: 20px;
	border-radius: 20px;
	height: calc(50% - 40px);
	width: calc(50% - 40px);
	position: fixed;
	top: 25%;
	left: 25%;
	display: grid;
	align-items: center;
	font-size: 22pt;
`

export const Close = styled.div`
	position: absolute;
	right: 20px;
	top: 20px;
	color: white;
	font-size: 30pt;
	cursor: pointer;
	&:hover {
		color: #EAC044;
	}
`
