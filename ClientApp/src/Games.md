import React, { useState, useEffect } from 'react'
import { format, addYears, differenceInDays } from 'date-fns/'
import { getUser } from '../auth'

const dateFormat = `MMMM do, yyyy`

function SingleXboxOneGame(props) {
// const todaysDate = Date.now()
// const achieveDate = new Date(props.LastUnlockedAchievementDate)
// const daysBetween = differenceInDays(todaysDate, achieveDate)

// console.log(daysBetween)
console.log(props.LastUnlockedAchievementDate)
return (
<section className="xbox-one-game-card">
<article className="game-img-container">
<img
          className="game-img"
          src="https://compass-ssl.xbox.com/assets/a5/f4/a5f4cc7b-974b-48e4-b976-f57b3bb97665.jpg?n=Halo-Franchise-2019_Super-Hero-1400_MCC_1920x1080_02.jpg"
          width="200rem"
          height="200rem"
          alt="GHLogo"
        />
</article>
<article>
<div className="xbox-one-game-info">
<p>{props.Title}</p>
<p>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABaklEQVRIie2WPTMDURSGzzWYkaHhf9DlF5jMECUtFT+AIkp6umjzP1CmEoowQ0En1JkJiswkHsUeZq29N9fd3VHI2+zer/c592vuERnrrwU0ya6mzX+i6PhtDcY5CqwDfWSMsfoXPWOrvoGBKtAC3oB2VnOgrV4tYNXWaS2HwzRKP+HApTbWgFngMAfQgXrta/kiDfyqjfNaNsBZBugpYNRrQetePnnxPb7Tb01ExBiDiDTCdldERBrq8eUpIrdpM64AQ42sDpSAOaAXMNse0RKXgBOtGwDLqSECW0BfO94D68BxAPgI2AAetNwHNp3rAywBNzGT5wDwU+z/Glj02hxgCthJGITAt4FJL2gigGmiJTsH3j2BVxr0zK+BliDKQNcB7ALlXGAp8ArR6UxqCFQLgcbgeyng3UKh/0tET6brenWAlSLAnZEXCR59/ZypTwLslQa50p24vFIfHNliaN8icq5MCeJYuesDNCblTGZWVRYAAAAASUVORK5CYII=" />{' '}
{props.EarnedAchievements}
</p>
<p>
{' '}
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAACvElEQVRYhc2YOU9VQRiGnzGgooBRWbRwK4xYqFErbIh7YmHsbbTXELfY2RiDSyz9DZhY21pKIBdcGo2FsXIFEiAKGuGxOOfK8XDhzrlcEt/kFmdmvvc8Z2buNwv8Rwq1BKmdQDfQBbQBLcAU8A14CwyEEL7WC7ISQKvaq5bUOZfWXNquV22pJ0SjelMdrwKwmMbVG2rjckH2qq9rhMjrpbqnVpAT6mSdQMqaUI/XAjJTZ5CyZtQjsSB7rX+P5PVZ3V4NZLX6aoVByho2N6lX5XiuAPuLDOkydAjozRb8TXpqK/AB2FjQdBr4CjQBHQVjx4GdIYQp+LdnLhYEGQJOA60hhJ0hhE5gB3AH+BnpsQm4sKA0HcNYPTFJhlvUW+pj9ZF6KvXqMf7fOJQH6bR6ii/rg9qs7lNHK9TfSz1vR/rNqe1ZmHORgapX05jSEubd6sECnmdhfs50xU4U4Kl6ADi8SH0AngMjBTy7sjDtSzTMahZ4Bxws8KIYdQA0pA9NkUFTIQTVDbny78DVCu0fAs0RvuuyMNORMM1qACZy5b+B4czzpxDCR/VOJMwPmB+m2F1ZA7AbeJEr3wCUMr/zaXnsxupLFuZtZBDAmRDCqwpAZQk8M9m7rIn0nH+/2mF8nnmvrlf3q2MV6vtSz/uRfrNq27+fs3jeqKR+tUHdapKB+9UH6tHU64T6K9JrcGHfJpvnIhpQT6oNGY9d6t0CIKqXyvH1WLVnSCZgM7C5YOwYsGvBqh1CmAT6CpoBrCVZrYuCAPSVQRbIZCV+WXC4alXJascXdY/JLn4l9UndFtV36jFX7nQwbezpIAPUnX5BPfVN7SkEkgHaro7UCaRk7NAsAdSoXrdyto3RqHrN5Z61c1At6mV1yOpLx6w6mLaPWbWB2u9n2pm/n2kHWoFJkvuZNyT3M6O1eP83+gMJZOrdi4YA4AAAAABJRU5ErkJggg==" />{' '}
{props.CurrentGamerscore} / {props.MaxGamerscore}
</p>

          <p>
            Last Unlock:{' '}
            {format(new Date(props.LastUnlockedAchievementDate), dateFormat)}
          </p>
        </div>
      </article>
    </section>

)
}

export function XboxOneGames() {
const [games, setGames] = useState([])

const user = getUser()

function loadGames() {
const url = `https://xapi.us/v2/${user.xboxProfileUserId}/xboxonegames/`

    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'X-AUTH': user.apiKey,
      },
    })
      .then(response => response.json())
      .then(apiData => {
        setGames(apiData.titles)
      })

}

useEffect(() => {
loadGames()
}, [])

return (
<section className="xbox-one-games-card">
{games
.sort((a, b) => {
let dateA = new Date(a.lastUnlock),
dateB = new Date(b.lastUnlock)
return dateB - dateA
})
.map(game => (
<SingleXboxOneGame
            Key={game.titleId}
            Title={game.name}
            CurrentGamerscore={game.currentGamerscore}
            MaxGamerscore={game.maxGamerscore}
            LastUnlockedAchievementDate={game.lastUnlock}
            EarnedAchievements={game.earnedAchievements}
          />
))}
</section>
)
}
