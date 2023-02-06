import { Flex, Text } from "@chakra-ui/react";
import { Droppable } from "react-beautiful-dnd";
import DraggableItem from "./DraggableItem";

const DroppableContainer = ({ column, tasks }) => {
	return (
		<Flex
			rounded="3px"
			bg="column-bg"
			w="400px"
			maxH="500px"
			flexDir="column">
			<Flex
				align="center"
				h="60px"
				bg="column-header-bg"
				roundedTop="3px"
				px="1.5rem"
				mb="1.5rem">
				<Text fontSize="17px" fontWeight={600} color="subtle-text">
					{column.title}
				</Text>
			</Flex>
			<Droppable droppableId={column.id}>
				{(droppableProvided, droppableSnapshot) => (
					<Flex
						ref={droppableProvided.innerRef}
						px="1.5rem"
						flexDir="column"
						flex={1}
						overflowY="auto"
						sx={{
							"&::-webkit-scrollbar": {
								width: "8px",
								borderRadius: "8px",
								backgroundColor: `rgba(0, 0, 0, 0.05)`,
							},
							"&::-webkit-scrollbar-thumb": {
								backgroundColor: `#9B9B9B`,
								borderRadius: "8px",
							},
						}}
						{...droppableProvided.droppableProps}>
						{tasks.map((task, index) => (
							<DraggableItem
								key={task.id}
								index={index}
								task={task}
							/>
						))}
						{droppableProvided.placeholder}
					</Flex>
				)}
			</Droppable>
		</Flex>
	);
};
export default DroppableContainer;
