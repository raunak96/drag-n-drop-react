import { Flex, Text } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

const DraggableItem = ({ task, index }) => {
	return (
		<Draggable key={task.id} draggableId={task.id} index={index}>
			{draggableProvided => (
				<Flex
					cursor="move"
					mb="1rem"
					h="65px"
					bg="card-bg"
					rounded="3px"
					p="1.5rem"
					ref={draggableProvided.innerRef}
					{...draggableProvided.draggableProps}
					{...draggableProvided.dragHandleProps}>
					<Text>{task.content}</Text>
				</Flex>
			)}
		</Draggable>
	);
};
export default DraggableItem;
