import React, { useEffect, useState } from 'react'

import { useTheme } from "./contexts/themeContext"
import useExtensions from "./hooks/useExtensions"

import Button from "./components/Button/Button"
import Header from "./components/Header/Header"
import SwitchToggle from "./components/SwitchToggle/SwitchToggle"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"
import ExtensionCard from "./components/ExtensionCard/ExtensionCard"
import ExtensionCardFooter from "./components/ExtensionCard/ExtensionCardFooter"
import ExtensionCardHeader from "./components/ExtensionCard/ExtensionCardHeader"
import ExtensionsFilter from "./components/ExtensionsFilter/ExtensionsFilter"

function App() {
  const { getTheme, setTheme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("All");

  /*
    The data comes from a static .json file
    I wrapped it inside a hook to see how it would be probably done if it was from a db call
  */
  const [extensions, toggleExtension, removeExtension] = useExtensions(activeFilter);

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

        <ExtensionsFilter activeFilter={activeFilter} onClick={ (f) => setActiveFilter(f) } />
      </div>

      <main>
        <section className="flow">
          {
            extensions.length > 0 ?

            extensions.map(e => (
              <ExtensionCard key={e.id}>
                <ExtensionCardHeader>
                  <img src={e.logo} alt={`${e.name} logo`} />

                  <section>
                    <h3 id={e.name} className="fs-500 medium">{e.name}</h3>
                
                    <p>{e.description}</p>
                  </section>
                </ExtensionCardHeader>

                <ExtensionCardFooter>
                  <Button variant="primary" onClick={ () => removeExtension(e.id) }>Remove</Button>

                  <SwitchToggle 
                    id={e.name} 
                    label={`Enable ${e.name} extension`}

                    checked={e.isActive} 
                    onChange={ () => toggleExtension(e.id) }
                  />
                </ExtensionCardFooter>
              </ExtensionCard>
            )) :

            <p>Nothing in here.</p>
          }
        </section>
      </main>
    </>
  )
}

export default App