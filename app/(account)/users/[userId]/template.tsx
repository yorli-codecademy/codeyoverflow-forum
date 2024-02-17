import React from 'react'
type UserTemplateProps = {
  children: React.ReactNode
}

const UserTemplate = ({ children }: UserTemplateProps) => {
  const requestTime = new Date()

  return (
    <div>
      {children}
      <footer>Last Checked: {requestTime.toLocaleTimeString()}</footer>
    </div>
  )
}
export default UserTemplate
