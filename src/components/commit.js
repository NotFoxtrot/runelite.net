import React from 'react'
import ago from 's-ago'

const Commit = ({ url, message, author, date }) => url ? (
  <div>
    <b>Latest commit:</b>{' '}
    <a href={url} style={{ color: 'cyan' }}>{message}</a> by{' '}
    <a href={author.url ? author.url : url} style={{ color: 'cyan' }}>
      {author.avatar
        ? (<span><img src={author.avatar} width='30' height='30' alt='Avatar' className='rounded' />{' '}</span>)
        : (<noscript />)}
      {author.name}
    </a>{' '}
    <span className='text-muted'>{ago(date)}</span>
  </div>
) : (<noscript />)

export default Commit
