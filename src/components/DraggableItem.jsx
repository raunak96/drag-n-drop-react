import { Flex, Text } from "@chakra-ui/react";

const DraggableItem = ({ task }) => {
	return (
		<Flex
			mb="1rem"
			h="75px"
			bg="card-bg"
			align="center"
			rounded="3px"
			p="1.5rem"
			draggable
			cursor="move">
			<Text>{task.content}</Text>
		</Flex>
	);
};
export default DraggableItem;
