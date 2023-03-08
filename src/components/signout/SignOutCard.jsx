import React from 'react'
import Card from '../card/Card'
import styles from "./signout.module.scss"

function SignOutCard() {
    const btnData=["Control Panel","View Profile","Signout"]
    const username="kaushik"
    const email = "kaushik@gmail.com"

  return (
    <Card className={styles.wrap}>
      <div className={styles.parawrap}>
      <p className={styles.paragraph}>{username}</p>
      <p className={styles.paragraph} >{email}</p>
      </div>
     <div className={styles.signout}>
      {btnData.map((data,index)=><button className={styles.button} key={index}>{data}</button>)}
      </div>
    </Card>
  )
}

export default SignOutCard
