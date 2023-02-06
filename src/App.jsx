import { Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableItem from "@/components/DraggableItem";
import { initialData, tasksMap } from "@/utils/data";

const App = () => {
	const [columns, setColumns] = useState(initialData);
	const onDragEnd = result => {
		console.log(result);
	};
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
			<DragDropContext onDragEnd={onDragEnd}>
				<Flex justify="space-between" columnGap="1rem" px="4rem">
					{columns.map(column => {
						const tasks = column.taskIds.map(taskId =>
							tasksMap.get(taskId)
						);
						return (
							<DraggableItem
								key={column.id}
								column={column}
								tasks={tasks}
							/>
						);
					})}
				</Flex>
			</DragDropContext>
		</Flex>
	);
};
export default App;
