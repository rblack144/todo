export default function Index(){
    const toDoItem = { text:"Wash clothes", completed: false, important: true, }
    return (<ToDoItem { ...toDoItem } />);
}

function ToDoItem({ text, completed, important }){
    const [textState, setTextState] = useState(text);
    const [completedSate, setCompletedState] = useState(completed);

    useEffect(() => {
        setTextState(`${text} ${new Date().toLocaleDateString()}`);
    }, []);

    return (
        <div className={completedSate ? "completed" : "" } onClick={() => {
            setCompletedState(!completedSate);
        }}>
            {important ? "*" : ""} {textState}
        </div>
    );
}