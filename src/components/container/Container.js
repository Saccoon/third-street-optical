import React, { Component } from 'react'
import {node} from 'prop-types'
import styled from 'styled-components'

class Container extends Component {
    static propTypes = {
        /** children inside of the container **/
        children: node.isRequired
    }

    static defaultProps = {
    }

    render() {
        const { children } = this.props

        const Container = styled.div`
            margin: 0 auto;
            max-width: 1200px;
        `

        return (
            <Container>
                {children}
            </Container>
        )
    }
}

export default Container
