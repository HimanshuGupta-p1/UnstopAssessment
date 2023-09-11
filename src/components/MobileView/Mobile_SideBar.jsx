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
	Image,
	Text,
} from "@chakra-ui/react";
import SegmentIcon from "@mui/icons-material/Segment";
import { useRef } from "react";
import { menu_images } from "../../assests/image";
export const Mobile_SideBar = ({ isOpen, onOpen, onClose }) => {
	const btnRef = useRef();

	return (
		<>
			<Box ref={btnRef} colorScheme="teal" onClick={onOpen}>
				<SegmentIcon
					sx={{
						transform: "scaleX(-1)",
						fontSize: "40px",
						borderRadius: "50%",
						bgcolor: "#F2F8FE",
						padding: "5px",
					}}
				/>
			</Box>
			<Drawer
				bgColor={"#F2F8FE"}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
				size={"xs"}
			>
				<DrawerOverlay />
				<DrawerContent bgColor={"#F2F8FE"}>
					<DrawerCloseButton />
					<DrawerHeader>Menu</DrawerHeader>

					<DrawerBody>
						<Grid gap="10px" p="5px" fontSize={"13px"} fontWeight={"500"}>
							{/* 1st box  */}
							<Flex
								p="10px"
								gap="10px"
								alignItems="center"
							>
								<Box>
									{" "}
									<Image
										src={menu_images.dashboard}
										alt="dashboard"
										margin="auto"
										width="25px"
										height="25px"
									/>
								</Box>

								<Text>Dashboard</Text>
							</Flex>
							{/* 2nd box  */}
							<Flex
								p="10px"
								gap="10px"
								borderRadius={"10px"}
								bgColor="#E5F1FC"
								border="2px solid #4096EC"
								color={"#4096EC"}
								alignItems={"center"}
							>
								<Box>
									<Image
										src={menu_images.note_alt}
										alt="dashboard"
										margin={"auto"}
										width="25px"
										height="25px"
									/>
								</Box>

								<Text>Assessment</Text>
							</Flex>
							{/* 3rd box */}

							<Flex
								p="10px"
								gap="10px"
								alignItems="center"
								// border="1px solid red"
							>
								<Box>
									<Image
										src={menu_images.quiz}
										alt="dashboard"
										margin={"auto"}
										width="25px"
										height="25px"
									/>
								</Box>

								<Text>My Library</Text>
							</Flex>
							<Flex
								justifyContent={"space-between"}
								alignItems={"center"}
								borderTop={"1px dashed #E3E5E8"}
							>
								<Flex p="10px" gap="10px">
									<Image
										src={menu_images.admin_meds}
										alt="dashboard"
										margin={"auto"}
										width="25px"
										height="25px"
									/>
									<Text>Round Status</Text>
								</Flex>
								<Box>
									<Button
										fontSize={"10px"}
										w="44px"
										h="18px"
										textAlign={"center"}
										alignItems={"center"}
										borderRadius={"7px"}
										border={"1px solid #DF623A"}
										display={"block"}
										fontWeight={"500"}
										color="#DF623A"
										p="0px 4px"
										bgColor={"#FBEBEA"}
										m={"auto"}
									>
										Admin
									</Button>
								</Box>
							</Flex>
						</Grid>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
