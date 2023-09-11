import {
	Avatar,
	AvatarGroup,
	Box,
	Button,
	Flex,
	Grid,
	Image,
	Text,
	useDisclosure,
    Center
} from "@chakra-ui/react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import { menu_images } from "../assests/image";
import { assessmentData } from "../data";
import { Add_Assessment } from "./Add_Assessment";
export const Assessments = ({ handleVisibility }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box bgColor="white" p="20px" color="#var(--text-100, #1C4980)">
			<Box display="flex" justifyContent={"space-between"}>
				<Text fontSize={"18px"} fontWeight={"500"} textAlign={"left"}>
					My Assessment
				</Text>

				<Box
					display={{ base: "flex", md: "none" }}
					width="30%"
					justifyContent={"space-between"}
					alignItem="start"
					height="20px"
				>
					<Image src={menu_images.search} alt="search" />
					<Image src={menu_images.filter_list} alt="filter" />
					<Image src={menu_images.bar_chart} alt="chartbar" onClick={handleVisibility} />
				</Box>
			</Box>
			<Grid
				mt="20px"
				gridTemplateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
				gap={{ base: "20px", md: "20px", lg: "30px" }}
			>
				<Box
					p="30px"
					borderRadius={"15px"}
					border="1px solid #E3E5E8"
					borderStyle={"dashed"}
					bgColor="#F6F8FA"
                    textAlign="center"
				>
					<Add_Assessment isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
					<Text fontWeight={"500"} fontSize={"18px"} color="#1C4980">
						New Assessment
					</Text>
					<Text fontSize={"14px"} mt={"12px"} fontWeight={"500"}>
						From here you can add questions of multiple types like MCQs,
						Subjective (text or paragraph)!
					</Text>
				</Box>
				{assessmentData.length &&
					assessmentData.map((elem) => (
						<Box
							p="15px"
							borderRadius={"15px"}
							border="1px solid #E3E5E8"
							color="#var(--text-100, #1C4980)"
						>
							<Flex w="100%" justifyContent={"space-between"}>
								<Image src={menu_images.bag} alt={"bag"} />
								<MoreVertIcon />
							</Flex>
							<Text
								fontWeight={"500"}
								fontSize={"18px"}
								textAlign={"left"}
								mt="10px"
								color="#var(--text-100, #1C4980)"
							>
								{elem.title}
							</Text>
							<Flex gap="6px" alignItems={"center"} fontSize={"14px"}>
								<Text fontWeight={"500"}>{elem.category}</Text>
								<Text color={"#B8C6D7"}>|</Text>
								<Text color={"#B8C6D7"}>
									{" "}
									<CalendarMonthIcon
										sx={{
											color: "#1C4980",
											marginTop: "5px",
											fontSize: "14px",
										}}
									/>{" "}
									{elem.date}
								</Text>
							</Flex>
							<Flex
								w="100%"
								mt="18px"
								borderTop="1px solid #E3E5E8"
								borderStyle={"dashed"}
								pt="10px"
								justifyContent={"space-between"}
								alignItems={"center"}
							>
								<Flex gap="10px">
									<Box textAlign={"left"} fontWeight={"500"} fontSize={"14px"}>
										<Text>{elem.duration}</Text>
										<Text>Duration</Text>
									</Box>
									<Box textAlign={"left"} fontWeight={"500"} fontSize={"14px"}>
										<Text>{elem.question}</Text>
										<Text>Questions</Text>
									</Box>
								</Flex>
								<Flex alignItems={"center"}>
									<Button
										h="30px"
										w="80px"
										fontSize={"13px"}
										bgColor={"white"}
										border="1px solid #1C4980"
										borderRadius={"15px"}
									>
										{" "}
										<InsertLinkIcon
											sx={{
												transform: "rotate(-45deg)",
												fontSize: "20px",
												marginRight: "5px",
											}}
										/>{" "}
										Share{" "}
									</Button>
									<Flex ml="20px" alignItems={"center"}>
										<AvatarGroup size="xs" spacing="-3">
											{elem.attendees.length &&
												elem.attendees.map((ele) => (
													<Avatar name={ele.name} zIndex={ele.id + 1} />
												))}
										</AvatarGroup>
									</Flex>
								</Flex>
							</Flex>
						</Box>
					))}
			</Grid>
		</Box>
	);
};
