import { Flex, Text } from "@chakra-ui/react";

const DraggableItem = () => {
	return (
		<Flex
			rounded="3px"
			bg="column-bg"
			w="400px"
			minH="500px"
			flexDir="column">
			<Flex
				align="center"
				h="60px"
				bg="column-header-bg"
				roundedTop="3px"
				px="1.5rem"
				mb="1.5rem">
				<Text fontSize="17px" fontWeight={600} color="subtle-text">
					ToDo
				</Text>
			</Flex>
			<Flex px="1.5rem" flexDir="column" flex={1}>
				<Flex mb="1rem" h="65px" bg="card-bg" rounded="3px" p="1.5rem">
					<Text>Hey there</Text>
				</Flex>
			</Flex>
		</Flex>
	);
};
export default DraggableItem;
