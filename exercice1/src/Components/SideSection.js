import React from 'react'
import styles from '../Style/SideSection.module.css'
import ArticleSideSection from './ArticleSideSection'

const articles = [
    {
        number: 1,
        topic: 'Päihdepolitiikka',
        body: 'Euroopan suhde kannabikseen on ristiriitainen: Näin laillistamiseen suhtaudutaan muualla'
    },
    {
        number: 2,
        topic: 'Työelämä',
        body: 'Uupumukseen auttaa harvoin sairausloma, psykiatrian erikoislääkäri sanoo – on kuitenkin olemassa yllättäviäkin keinoja, joista voi olla apua'
    },
    {
        number: 3,
        topic: 'HS Helsinki',
        body: 'Varastettu harvinainen muumi-teos nähtiin Vaasankadulla – Terassilta huomattiin, kuinka joku tunki vanerisen peikon taksin takakonttiin'
    },
    {
        number: 4,
        topic: 'Lukijan mielipide',
        body: 'Kannabiksen käyttö laukaisi lapsellani skitsofrenian'
    },
    {
        number: 5,
        topic: 'Pörssi',
        body: 'Deutsche Bankin kysely: Markkinoiden ammattilaisista 58 prosenttia arvioi osakkeiden halpenevan tuntuvasti loppuvuonna'
    },
    {
        number: 6,
        topic: 'Kannabiskeskustelu',
        body: 'Näin kävi, kun Kanada laillisti kannabiksen – pimeä markkina voi hyvin, ja moni kaipaa menneeseen'
    },
]

export default function SideSection() {
    return (
        <div className={styles.container}>

            <h2 className={styles.mainTitle}>Luetuimmat</h2>

            {
                articles.map(element => <ArticleSideSection number={element.number} topic={element.topic} body={element.body} />)
            }
        </div>
    )
}
