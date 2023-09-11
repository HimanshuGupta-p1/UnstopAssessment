import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Grid,
	Input,
	Select,
	Text,
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useState } from "react";
import { skill } from "../data";

export const Add_Assessment = ({ isOpen, onOpen, onClose }) => {
	const btnRef = React.useRef();
	const [text, setText] = useState("");
	const [skills, setSkills] = useState(skill);

	function handleKeyPress(e) {
		if (e.key === "Enter") {
			setSkills([...skills, text]);
			setText("");
		}
	}

	function handleRemove(index) {
		skills.splice(index, 1);
	}

	return (
		<>
			<Button
				ref={btnRef}
				colorScheme="white"
				onClick={onOpen}
				borderRadius="50%"
				w="65px"
				h="65px"
				bgColor="white"
			>
				<AddIcon fontSize="large" style={{ color: "#0073E6"}} />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="bottom"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent
					top={{ base: "50px", md: "0px", lg: "0" }}
					borderTopRadius={"20px"}
					w={{ base: "100%", md: "50%", lg: "40%" }}
					m="auto"
				>
					<DrawerCloseButton backgroundColor="#FBEBEA" borderRadius="50%" color="#D63500" />
					<DrawerHeader borderBottom={"1px solid #E3E5E8"} color="#1C4980">
						Create new assessment
					</DrawerHeader>
					<DrawerBody>
						<Grid
							color="#1C4980"
							fontSize={"18px"}
							fontWeight={"500"}
							textAlign={"left"}
							gap="20px"
						>
							<Box mt="10px">
								<Text>Name of assessment</Text>
								<Input placeholder="Type Here" mt="5px" />
							</Box>
							<Box>
								<Text>Purpose of the test is</Text>
								<Select placeholder="Select"></Select>
							</Box>
							<Box>
								<Text>Description</Text>
								<Select placeholder="Select"></Select>
							</Box>
							<Box>
								<Text>Skills</Text>
								<Grid
									border={"1px solid #E3E5E8"}
									p="10px"
									gridTemplateColumns={{
										base: "repeat(2,auto)",
										md: "repeat(3,auto)",
										lg: "repeat(4,auto)",
									}}
									fontSize={"12px"}
									gap="15px"
								>
									{skills.length > 0 &&
										skills.map((elem, i) => (
											<Flex
												bgColor="#DDEDFF"
												p="5px 10px"
												borderRadius={"15px"}
												justifyContent={"space-between"}
												alignItems="center"
											>
												<Text>{elem}</Text>
												<Text onClick={() => handleRemove(i)}>
													<ClearIcon
														sx={{ fontSize: "20px", marginLeft: "5px" }}
													/>
												</Text>
											</Flex>
										))}
								</Grid>
								<Input
									mt="-1px"
									placeholder="Type Here"
									value={text}
									onChange={(e) => setText(e.target.value)}
									onKeyPress={handleKeyPress}
								/>
							</Box>
							<Box mt="10px">
								<Text>Duration of assessment</Text>
								<Input placeholder="Type Here" type="time" mt="5px" />
							</Box>
						</Grid>
					</DrawerBody>

					<Button
						bgColor="#0073E6"
						color="white"
						m="auto"
						display={"block"}
						w="92%"
						mt="20px"
						mb="20px"
					>
						Next
					</Button>
				</DrawerContent>
			</Drawer>
		</>
	);
}
