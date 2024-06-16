import { ThemeProvider } from "styled-components";
import { Button } from "./components/Button";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button varient="primary"></Button>
      <Button varient="secondary" ></Button>
      <Button varient="danger"></Button>
      <Button varient="success"></Button>
      <Button/>
    </ThemeProvider>
  )
}
