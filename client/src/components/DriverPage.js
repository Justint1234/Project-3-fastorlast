import React, { Component } from 'react';
import styled from 'styled-components'

const DriverWrapper = styled.div`
display: flex;
justify-content: center;
`

class DriverPage extends Component {
    render() {
        return (
           <DriverWrapper>
            <div>
                <h1>Choose your opponent</h1>
            </div>
            </DriverWrapper> 
        );
    }
}

export default DriverPage;