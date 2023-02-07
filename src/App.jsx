import { Flex, Heading, Text } from "@chakra-ui/react";
import { lazy, Suspense, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { initialData, tasksMap } from "@/utils/data";

/* Lazy loaded due to some bug with react-beautiful-dnd package  */
const DroppableContainer = lazy(() =>
	import("@/components/DroppableContainer")
);
const App = () => {
	const [columns, setColumns] = useState(initialData);
	const onDragEnd = result => {
		console.log(result);
		const { source, destination, draggableId } = result;
		if (!destination) return;
		// If source and destination same
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;
		setColumns(prev => {
			return prev.map(column => {
				if (column.id === source.droppableId)
					column.taskIds.splice(source.index, 1);
				if (column.id === destination.droppableId)
					column.taskIds.splice(destination.index, 0, draggableId);
				return column;
			});
		});
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
					{columns?.map(column => {
						const tasks = column.taskIds.map(taskId =>
							tasksMap.get(taskId)
						);
						return (
							<Suspense
								key={column.id}
								fallback={<div>Loading...</div>}>
								<DroppableContainer
									column={column}
									tasks={tasks}
								/>
							</Suspense>
						);
					})}
				</Flex>
			</DragDropContext>
		</Flex>
	);
};
export default App;
