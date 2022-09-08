import React from 'react'
import { Button} from 'elzemui'
import 'elzemui/dist/index.css'

function App() {
  return (
    <div>
      <Button type='primary' onClick={() => alert("https://github.com/Malike01")} text="Primary Button"/> <br />
      <Button type='secondary' onClick={() => alert("https://github.com/Malike01")} text="Default Button" /> <br />
      <Button type='dashed' onClick={() => alert("https://github.com/Malike01")} text="Dashed Button" /> <br />
      <Button type='link' onClick={() => alert("https://github.com/Malike01")} text="Link Button" /> <br />
      <Button type='text' onClick={() => alert("https://github.com/Malike01")} text="Text Button" /> <br />
    </div>
  )
}

export default App