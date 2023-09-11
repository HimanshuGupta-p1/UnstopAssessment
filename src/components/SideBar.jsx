/* -------- import parts -------- */

import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import { menu_images } from "../assests/image";

/* -------- import parts -------- */

export const SideBar = () => {
	return (
		<Box
			position="fixed"
			zIndex="10"
			top="0"
			bgColor="white"
			w={{ base: "15%", md: "15%", lg: "10%" }}
			h="100vh"
			display={{ base: "none", md: "block", lg: "block" }}
			textAlign="center"
		>
			<Grid gap="10px" p="10px 20px " fontSize={"13px"} fontWeight={"500"}>
				{/* ----- dashboard ------*/}

				<Box p="10px">
					<Image
						src={menu_images.dashboard}
						alt="dashboard"
						margin={"auto"}
						width="25px"
						height="25px"
					/>
					<Text>Dashboard</Text>
				</Box>

				{/* ----- assessment ------*/}

				<Box
					p="10px 0px"
					width={"90px"}
					borderRadius={"10px"}
					bgColor="#E5F1FC"
					border="2px solid #4096EC"
					color={"#4096EC"}
					margin={"auto"}
				>
					<Image
						src={menu_images.note_alt}
						alt="assessment"
						margin={"auto"}
						width="25px"
						height="25px"
					/>
					<Text>Assessment</Text>
				</Box>

				{/* ----- mylibrary ------*/}

				<Box p="10px">
					<Image
						src={menu_images.quiz}
						alt="mylibrary"
						margin={"auto"}
						width="25px"
						height="25px"
					/>
					<Text>My Library</Text>
				</Box>

				{/* ----- admin ------*/}

				<Box p="15px" borderTop={"1px dotted #E3E5E8"} mt="10px">
					<Button
						fontSize={"10px"}
						w="46px"
						h="18px"
						textAlign={"center"}
						alignItems={"center"}
						display={"block"}
						fontWeight={"500"}
						p="0px 4px"
						m={"auto"}
						border-radius="22px"
						border="1px solid var(--accent-new-red, #D63500)"
						background="var(--accent-red-light, #FBEBEA)"
						color="var(--accent-new-red, #D63500)"
					>
						Admin
					</Button>
				</Box>

				{/* ----- roundstatus ------*/}

				<Box p="10px">
					<Image
						src={menu_images.admin_meds}
						alt="roundstatus"
						margin={"auto"}
						width="25px"
						height="25px"
					/>
					<Text>Round </Text>
					<Text>Status</Text>
				</Box>
			</Grid>
		</Box>
	);
};