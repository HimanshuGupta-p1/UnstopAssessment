import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Assessments } from "../components/Assessments";
import { Mobile_Navbar } from "../components/MobileView/Mobile_Navbar";
import { Navbar } from "../components/Navbar";
import { Assessment_Overview } from "../components/Assessment_Overview";
import { SideBar } from "../components/SideBar";

export const Home = () => {
	const [isLargerThan960] = useMediaQuery("(min-width: 960px)");

	const [showOverView, setShowOverView] = useState(isLargerThan960);

	useEffect(() => {
		setShowOverView(isLargerThan960);
	}, [isLargerThan960]);

	const handleVisibility = () => {
		setShowOverView(!showOverView);
	};

	return (
		<Flex justifyContent="space-between" pr="20px" h="100vh">
			<SideBar />
			<Box
				w={{ base: "100%", md: "83%", lg: "88%" }}
				position="absolute"
				left={{ base: "0", md: "16%", lg: "11%" }}
			>
				<Mobile_Navbar />
				<Navbar />
				{showOverView && <Assessment_Overview />}
				<Assessments handleVisibility={handleVisibility} />
			</Box>
		</Flex>
	);
};
