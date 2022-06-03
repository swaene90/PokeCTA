import { Table, TableCell, TableHead } from '@mui/material'
import React from 'react'
import PokemonCard from '../PokemonCard'

export default function Pokedex() {
  return (
    <>
    <Table>
      <TableHead>
        <TableCell></TableCell>
        <TableCell>Name</TableCell>
      </TableHead>
    </Table>
    </>
  )
}
