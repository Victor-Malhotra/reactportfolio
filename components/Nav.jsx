import {useState} from 'react'
import Link from 'next/link'
import { Navbar } from "flowbite-react";



export default function Nav() {
    return (
<Navbar fluid={true} rounded={true} className="shadow-xl bg-zinc-600 sticky-top">
  <Navbar.Brand href="/">
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Portfolio
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
      HOME
    </Navbar.Link>
    <Navbar.Link href="/aboutme">
      ABOUT ME
    </Navbar.Link>
    <Navbar.Link href="/resume">
      RESUME
    </Navbar.Link>
    <Navbar.Link href="/skills">
      SKILLS
    </Navbar.Link>
    <Navbar.Link href="/contact">
      CONTACT
    </Navbar.Link>
        </Navbar.Collapse>
</Navbar>
    )
}
