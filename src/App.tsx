import { Switch } from "./components/Switch";
import { Button } from "./components/ui/button";


function App() {
	return (
		<>
			<div className=" m-auto w-3/6 p-10 text-center">
				<h1 className="text-3xl font-bold">React+shadcn+vite</h1>
				<Switch />
				<Button>Click me</Button>

				
			</div>
			
		</>
	);
}

export default App;
