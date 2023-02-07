import { Flex, Text } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

const DraggableItem = ({ task, index }) => {
	return (
		<Draggable key={task.id} draggableId={task.id} index={index}>
			{(provided, snapshot) => (
				<Flex
					mb="1rem"
					h="75px"
					bg="card-bg"
					align="center"
					rounded="3px"
					p="1.5rem"
					outline={snapshot.isDragging ? "2px solid #2D313E" : ""}
					boxShadow={
						snapshot.isDragging
							? "0 5px 10px rgba(0, 0, 0, 0.6)"
							: "unset"
					}
					opacity={snapshot.isDragging ? "0.8" : "1"}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}>
					<Text>{task.content}</Text>
				</Flex>
			)}
		</Draggable>
	);
};
export default DraggableItem;
