import UseMemoExample from './components/UseMemoExample';
import UseRefRenderCountExample from './components/UseRefRenderCountExample';
import UseRefInputFile from './components/UseRefInputFile';
import UseContextExample from './components/UseContextExample/UseContextExample';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header />
      {/* Step 1. Use memo calc logic */}
      <UseMemoExample />

      {/* Step 2. Use ref */}
      <UseRefRenderCountExample />

      {/* Step 3. Use ref file*/}
      <UseRefInputFile />

      {/* Step 4. Use context */}
      <UseContextExample />
    </div>
  );
};
export default App;
