import React from 'react'
import styled from "styled-components";
import Map from "../assets/map.png";
import Phone from "../assets/phone.png";
import Send from "../assets/send.png";

const Container = styled.div`
	height: 90%;
	color: red;
	background: url("https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGF0dGVybnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60");
	background-size: cover;
`;


const Wrapper = styled.div`
	height: 100%;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

const FormContainer = styled.div`
	width: 50%;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Title = styled.h1`
	margin: 50px;
	margin-top: 0;
	color: black;
	@media only screen and (max-width: 480px) {
		margin: 20px;
	}
`;

const Form = styled.form`
	height: 250px;
	display: flex;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

const LeftForm = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 30px;
	@media only screen and (max-width: 480px) {
		height: 50%;
		margin-right: 0;
	}
`;

const RightForm = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media only screen and (max-width: 480px) {
		height: 50%;
	}
`;

const Input = styled.input`
	width: 200px;
	padding: 20px;
	@media only screen and (max-width: 480px) {
		padding: 5px;
	}
`;

const TextArea = styled.textarea`
	width: 200px;
	height: 60%;
	padding: 20px;
	@media only screen and (max-width: 480px) {
		padding: 5px;
		margin-top: 20px;
	}
`;

const Button = styled.button`
	border: none;
	padding: 15px;
	background-color: darkblue;
	color: white;
	font-size: 20px;
	border-radius: 10px;
	margin-top: 20px;
	cursor: pointer;
	@media only screen and (max-width: 480px) {
		padding: 5px;
		font-size: 14px;
	}
`;

const AddressContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media only screen and (max-width: 480px) {
		width: 100%;
		margin-top: 20px;
	}
`;

const AddressItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 50px;
	@media only screen and (max-width: 480px) {
		margin-bottom: 20px;
	}
`;

const Icon = styled.img`
	width: 20px;
	margin-right: 20px;
	@media only screen and (max-width: 480px) {
		width: 15px;
	}
`;

const Text = styled.span`
	font-size: 20px;
	margin-right: 15px;
	@media only screen and (max-width: 480px) {
		font-size: 14px;
	}
`;


const Contact = () => {
    return (
		<Container>
			<Wrapper>
				<FormContainer>
					<Title>
						Questions? <br /> Let's Get In Touch
					</Title>
					<Form>
						<LeftForm>
							<Input placeholder="Your Name" />
							<Input placeholder="Your Email" />
							<Input placeholder="Subject" />
						</LeftForm>
						<RightForm>
							<TextArea placeholder="Your Message" />
							<Button>Send</Button>
						</RightForm>
					</Form>
				</FormContainer>
				<AddressContainer>
					<AddressItem>
						<Icon src={Map} />
						<Text>Am Panniufer 7 12047, Berlin, Germany</Text>
					</AddressItem>
					<AddressItem>
						<Icon src={Phone} />
						<Text>+49 30 1234 5678</Text>
						<Text>+49 304321 8765</Text>
					</AddressItem>
					<AddressItem>
						<Icon src={Send} />
						<Text>contact@rainbow.com</Text>
						<Text>info@rainbow.com</Text>
					</AddressItem>
				</AddressContainer>
			</Wrapper>
		</Container>
	);
}

export default Contact
