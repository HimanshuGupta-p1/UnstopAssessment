import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

export const Navbar = () => {
	const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");

	// having issues

	const textToShow = isLargerThanMd ? "My Assessments" : "Unstop Assessments";
	const textToShowAssess = isLargerThanMd ? "Assessments" : "My Assessments";
	return (
		<Flex
			w="100%"
			h="70px"
			bgColor="white"
			justifyContent="space-between"
			pr="20px"
			borderBottom={"2px solid #E3E5E8"}
			borderTopRadius={{ base: "0px", md: "15px", lg: "15px" }}
			alignItems="center"
		>
			<Flex alignItems={"center"} w={{ base: "100%" }} gap="10px" justifyContent={{base: "center", md: "start"}} >
				<Box
					fontSize={{ base: "14px", md: "20px" }}
					fontWeight={{ base: "500", md: "bold" }}		
					p={{ base: "20px 14px", md: "5px 20px" }}
					alignItems="center"
					font-family="Inter"
					borderRight={{ base: "none", md: "2px solid #E3E5E8" }}
					borderBottom={{ base: "3px solid #0073E6", md: "none" }}
                    textAlign="center"
				>
					<Text
            color={{
              base: "var(--secondary-1, #0073E6)",
              md: "var(--text-100, #1C4980)",
            }}
            margin={"auto"}
					>
						{textToShowAssess}
					</Text>
				</Box>
				<Box
					fontSize={{ base: "14px", md: "16px" }}
					fontWeight={{ base: "500", md: "bold" }}
					font-family="Inter"
					p={{ base: "2px 12px", md: "5px 20px" }}
					alignContent={"center"}
					color={"#0073E6"}
                    textAlign="center"
				>
					<Text
						borderBottom={{ md: "3px solid #0073E6" }}
						p=" 23px 0px"
						color={{
							base: "var(--text-85, #3E6493)",
							md: "var(--secondary-1, #0073E6)",
						}}
						// margin={"auto"}
					>
						{textToShow}
					</Text>
				</Box>
			</Flex>
			<Box display={{ base: "none", md: "block", lg: "block" }}>
				<SmartphoneIcon sx={{ color: "#1C4980" }} />
			</Box>
		</Flex>
	);
}
