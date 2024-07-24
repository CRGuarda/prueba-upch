/* eslint-disable @typescript-eslint/no-unused-vars */
export const RowsSkeleton = ({ size = 1 }: { size: number }) => {
  const arrayMapper = Array.from({ length: size })
  return arrayMapper.map((_, index) => {
    return (
      <tr key={index}>
        <th scope='row'>
          <input className='form-check-input' type='checkbox' />
        </th>
        <td className='placeholder-glow'>
          <span className='placeholder w-100'></span>
        </td>
        <td className='placeholder-glow'>
          <span className='placeholder w-100'></span>
        </td>
        <td className='placeholder-glow'>
          <span className='placeholder w-100'></span>
        </td>
        <td className='placeholder-glow'>
          <span className='placeholder w-100'></span>
        </td>
        <td className='placeholder-glow'>
          <span className='placeholder w-100'></span>
        </td>
        <td className='placeholder-glow'>
          <span className='placeholder w-100'></span>
        </td>
        <td className='placeholder-glow'>
          <span className='placeholder w-100'></span>
        </td>
      </tr>
    )
  })
}
