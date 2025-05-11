import React from 'react'

import Header from "./components/Header/Header"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"
import ExtensionCard from "./components/ExtensionCard/ExtensionCard"
import ExtensionCardFooter from "./components/ExtensionCard/ExtensionCardFooter"
import ExtensionCardHeader from "./components/ExtensionCard/ExtensionCardHeader"
import Button from "./components/Button/Button"
import SwitchToggle from "./components/SwitchToggle/SwitchToggle"

function App() {
  return (
    <>
      <div className="flow">
      
      <h1>Components</h1>
      
      <Header>
        <div>
          <img src="/logo.svg" alt="Extensions Manager Logo" />
          <p class="fs-700 semibold">Extensions</p>
        </div>

        <ThemeToggle />
      </Header>

        <div className="flex">
          <Button>
            Default
          </Button>
          <Button variant="active">
            Active
          </Button>
          <Button variant="primary">
            Primary
          </Button>
        </div>

        <ExtensionCard>
          <ExtensionCardHeader>
            <img src="/src/assets/images/logo-devlens.svg" alt="DevLens Logo" />

            <section>
              <h3 id="DevLens" class="fs-500 medium">DevLens</h3>
          
              <p>Quickly inspect page layouts and visualize element boundaries.</p>
            </section>
          </ExtensionCardHeader>

          <ExtensionCardFooter>
            <Button variant="primary">Remove</Button>

            <SwitchToggle id={"devlens"} label={"Enable DevLens extension"} />
          </ExtensionCardFooter>
        </ExtensionCard>
      </div>
    </>
  )
}

export default App