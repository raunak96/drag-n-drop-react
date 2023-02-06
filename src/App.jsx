import { Flex, Heading, Text } from "@chakra-ui/react";
import DraggableItem from "./components/DraggableItem";

const App = () => {
	return (
		<Flex
			flexDir="column"
			bg="main-bg"
			minH="100vh"
			w="full"
			color="white-text"
			pb="2rem">
			<Flex py="4rem" flexDir="column" align="center">
				<Heading fontSize="3xl" fontWeight={600}>
					React Beautiful Drag and Drop
				</Heading>
				<Text fontSize="20px" fontWeight={600} color="subtle-text">
					react-beautiful-dnd
				</Text>
			</Flex>
			<Flex justify="space-between" columnGap="2rem" px="4rem">
				<DraggableItem />
				<DraggableItem />
				<DraggableItem />
			</Flex>
		</Flex>
	);
};
export default App;
