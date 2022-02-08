import React from 'react'
import styled from "styled-components";
import AnimatedShapes from "../components/AnimatedShapes";
import Woman from '../assets/woman_front.png'


const Container = styled.div`
	height: calc(100vh - 50px);
	display: flex;
	${'' /* background-color: black; */}
	@media only screen and (max-width: 480px) {
		flex-direction: column;
	}
`;

const Left = styled.div`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media only screen and (max-width: 480px) {
		width: 100%;
		height: 100%;
	}
`;

const Title = styled.h1`
	width: 60%;
	font-size: 60px;
    color: white;
	@media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
	}
`;

const Desc = styled.p`
	width: 60%;
	font-size: 20px;
	margin-top: 20px;
	color: white;
	@media only screen and (max-width: 480px) {
		width: 100%;
	}
`;

const Info = styled.div`
	width: 60%;
	display: flex;
	margin-top: 50px;
	align-items: center;
	justify-content: space-between;
	@media only screen and (max-width: 480px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Button = styled.div`
	padding: 15px;
	background-color: darkblue;
	color: white;
	border-radius: 10px;
	font-weight: bold;
	border: none;
	letter-spacing: 2px;
	cursor: pointer;
	@media only screen and (max-width: 480px) {
		margin-bottom: 20px;
	}
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
`;

const Phone = styled.span`
	color: #f0667d;
	font-weight: bold;
`;

const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`;

const Right = styled.div`
	width: 40%;
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;


const Intro = () => {
    return (
		<Container>
			<Left>
				<Title>Creative Look from experinces</Title>
				<Desc>
					We believe that the progress of products and services are
					closely related with our customers is the only way to have a
					real impact on ours Shops.
				</Desc>
				<Info>
					<Button>START A PROJECT </Button>
					<Contact>
						<Phone>Call Us (49 30) 4321 5678 </Phone>
						<ContactText> For Any Question or Concern </ContactText>
					</Contact>
				</Info>
			</Left>
			<Right>
				<Image src={Woman} />
			</Right>
			<AnimatedShapes />
		</Container>
	);
}

export default Intro
