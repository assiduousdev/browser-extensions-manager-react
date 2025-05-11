import React from 'react'

import { useTheme } from "./contexts/themeContext"

import Header from "./components/Header/Header"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"
import ExtensionCard from "./components/ExtensionCard/ExtensionCard"
import ExtensionCardFooter from "./components/ExtensionCard/ExtensionCardFooter"
import ExtensionCardHeader from "./components/ExtensionCard/ExtensionCardHeader"
import Button from "./components/Button/Button"
import SwitchToggle from "./components/SwitchToggle/SwitchToggle"
import useExtensions from "./hooks/useExtensions"

function App() {
  const { getTheme, setTheme } = useTheme();
  const extensions = useExtensions();

  const toggleTheme = () => {
    setTheme( getTheme() === "dark" ? "light" : "dark" );
  }

  return (
    <>
      <div className="flow">
      
      <h1>Components</h1>

      <ThemeToggle onClick={() => toggleTheme() } />
      
      <Header>
        <div>
          <img src="/logo.svg" alt="Extensions Manager Logo" />
          <p className="fs-700 semibold">Extensions</p>
        </div>

        <ThemeToggle onClick={() => toggleTheme() } />
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
      </div>

      <main>
        <section className="flow">
          {
            extensions.map(e => (
              <ExtensionCard key={e.name}>
                <ExtensionCardHeader>
                  <img src={e.logo} alt={`${e.name} logo`} />

                  <section>
                    <h3 id={e.name} className="fs-500 medium">{e.name}</h3>
                
                    <p>{e.description}</p>
                  </section>
                </ExtensionCardHeader>

                <ExtensionCardFooter>
                  <Button variant="primary">Remove</Button>

                  <SwitchToggle 
                    id={e.name} 
                    label={`Enable ${e.name} extension`}
                     
                    checked={e.isActive} 
                    onChange={ () => console.log("changed") }
                  />
                </ExtensionCardFooter>
              </ExtensionCard>
            ))
          }
        </section>
      </main>
    </>
  )
}

export default App