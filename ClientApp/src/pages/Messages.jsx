import React from 'react'

export function Messages() {
  return (
    <section className="message-card">
      <article classname="message-img">
        <a href="#">
          <img
            className="friendAvatar"
            src="https://i.pcmag.com/imagery/articles/03q56RTgHk4cQvs07pQt4I9-1.fit_scale.size_2698x1517.v1569490700.jpg"
            width="120rem"
            height="120rem"
            alt="GHLogo"
          />
        </a>
      </article>
      <article className="message-text">
        <div className="message-item-text">
          <strong>Sender</strong>
        </div>
        <div className=" date message-item-text">
          <strong>Sent: 07/12/2020</strong>
        </div>
        <div className="message-body-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            fringilla id erat vel viverra. Nulla ornare felis est, quis aliquam
            diam bibendum sed. Nunc ut luctus orci. Aliquam ac venenatis metus.
            Vestibulum tincidunt quam eu odio pharetra rhoncus. Ut eu
            pellentesque magna. Aliquam justo orci, venenatis in nisi nec,
            dignissim efficitur odio. Suspendisse vel faucibus quam. Integer
            pulvinar placerat mi, non aliquet magna mollis eu.
          </p>
        </div>
      </article>
    </section>
  )
}
