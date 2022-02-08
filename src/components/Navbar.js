import React from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 100px;
	background-color: #1b1b1b;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Left = styled.div`
	width: 60%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.h1`
	font-weight: bold;
	text-decoration: underline crimson;
	background-image: linear-gradient(
		to left,
		violet,
		indigo,
		blue,
		green,
		yellow,
		orange,
		red
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Menu = styled.ul`
	display: flex;
	list-style: none;
	@media only screen and (max-width: 480px) {
		display: none;
	}
`;

const MenuItem = styled.li`
	margin: 30px;
	font-size: 20px;
	font-weight: bold;
	-webkit-animation: animatedBackground_b 5s linear infinite alternate;
	@keyframes animatedBackground_b {
		0% {
			color: #ff8b00;
		}
		10% {
			color: #e8ff00;
		}
		20% {
			color: #5dff00;
		}
		30% {
			color: #00ff2e;
		}
		40% {
			color: #00ffb9;
		}
		50% {
			color: #00b9ff;
		}
		60% {
			color: #002eff;
		}
		70% {
			color: #5d00ff;
		}
		80% {
			color: #e800ff;
		}
		90% {
			color: #ff008b;
		}
		100% {
			color: #ff0000;
		}
	}
`;

const Button = styled.ul`
	border: 5px solid transparent;
	border-image: linear-gradient(
		to bottom right,
		#b827fc 0%,
		#2c90fc 25%,
		#b8fd33 50%,
		#fec837 75%,
		#fd1892 100%
	);
	border-image-slice: 1;
	padding: 10px 15px;
	background-color: #58427c;
	color: white;
	font-weight: bold;
	border-radius: 10px;
	cursor: pointer;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Logo> Agency </Logo>
					<Menu>
						<MenuItem> Home </MenuItem>
						<MenuItem> Features </MenuItem>
						<MenuItem> Services </MenuItem>
						<MenuItem> Pricing </MenuItem>
						<MenuItem> Contact </MenuItem>
					</Menu>
				</Left>
				<Button>Join Today</Button>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
