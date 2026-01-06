'use client'

import { BlurFade } from '@/components/ui/blur-fade'
import { TweetCard, TweetMention } from '@/components/ui/tweet-card'

const tweets = [
  {
    name: 'Josef Büttgen',
    handle: 'josefbuettgen',
    date: 'Dec 1, 2025',
    avatarUrl: '/demo-day/pfp1.png',
    tweetUrl: 'https://x.com/josefbuettgen/status/1998295947156296099',
    content: (
      <>
        Just finished <TweetMention>@HackerResidency</TweetMention> and honestly
        it was incredible.
        {'\n\n'}
        Met some of the best people, made friends i know i'll keep for life and
        got more done than i expected.
        {'\n\n'}
        The subtraction thing really works. Cutting out all the noise and just
        focusing made such a difference.
        {'\n\n'}
        Going to bring that energy back to my regular work now.
        {'\n\n'}
        Also just being around other great builders made me think bigger and see
        opportunities i wasn't seeing before.
        {'\n\n'}
        There's something powerful about everyone pushing each other and
        actually helping each other succeed.
      </>
    )
  },
  {
    name: 'Alex Nguyen',
    handle: 'alexcooldev',
    date: 'Dec 1, 2025',
    avatarUrl: '/demo-day/pfp4.jpg',
    tweetUrl: 'https://x.com/alexcooldev/status/1995327556359422268',
    content: (
      <>
        Bye <TweetMention>@HackerResidency</TweetMention>, thanks{' '}
        <TweetMention>@transitive_bs</TweetMention>,{' '}
        <TweetMention>@tdinh_me</TweetMention>,{' '}
        <TweetMention>@phuctm97</TweetMention>,{' '}
        <TweetMention>@dayonefoundry</TweetMention> and everyone for organizing
        such a successful and meaningful event.
      </>
    )
  },
  {
    name: 'Brian Shin',
    handle: 'brianshinsh',
    date: 'Dec 1, 2025',
    avatarUrl: '/demo-day/pfp2.jpg',
    tweetUrl: 'https://x.com/brianshinsh/status/1995386416550064298',
    content: (
      <>
        Just arrived back home from Da Nang!
        {'\n\n'}
        Honestly, I didn't know what to expect coming into{' '}
        <TweetMention>@HackerResidency</TweetMention> but it turned out to be
        one of my best life experiences.
        {'\n\n'}
        It was not only an environment where I was able to lock in and focus on
        building (and launching) my app, but a home where I truly made lifelong
        friends. Had a semi-deep conversation with{' '}
        <TweetMention>@robj3d3</TweetMention> today regarding how difficult it
        is for indiehackers to find people of not only similar ambition &
        mindset, but "character" - HRG achieved exactly that.
      </>
    )
  },
  {
    name: 'Minh-Phuc Tran',
    handle: 'phuctm97',
    date: 'Dec 4, 2025',
    avatarUrl: '/people/phuc.jpg',
    tweetUrl: 'https://x.com/phuctm97/status/1996469415706349858',
    content: (
      <>
        <TweetMention>@Vibingbase</TweetMention> is the project that I had the
        most fun building in long time
        {'\n\n'}
        It's also the most technically challenging project that I've ever worked
        on
        {'\n\n'}
        The <TweetMention>@HackerResidency</TweetMention> made building it even
        more fun
        {'\n\n'}I have strong conviction that it will soon become my biggest
        project ever
      </>
    )
  }
]

export function TestimonialsSection() {
  return (
    <section className='relative z-10 flex flex-col gap-8 py-16 md:py-24 px-4 w-full'>
      <BlurFade delay={0.1} inView>
        <h2 className='text-center text-balance text-3xl md:text-4xl font-semibold tracking-tight'>
          Founders from Batch 0.0-beta
        </h2>
      </BlurFade>

      <div className='columns-1 md:columns-2 gap-4 max-w-5xl mx-auto w-full space-y-4'>
        {tweets.map((tweet, index) => (
          <BlurFade key={tweet.handle} delay={0.1 + index * 0.1} inView>
            <div className='break-inside-avoid'>
              <TweetCard {...tweet} />
            </div>
          </BlurFade>
        ))}
      </div>
    </section>
  )
}
