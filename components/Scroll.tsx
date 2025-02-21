import React, { useEffect, useRef } from 'react'
import Landing from "./Landing";
import { ChevronsDown } from 'react-feather';
import { motion } from 'framer-motion'
import usePreload from '../utils/usePreload';

const covers = {
  inRainbows: 'https://s1.ax1x.com/2022/06/23/jC89mt.jpg',
  forEmma: 'https://s1.ax1x.com/2022/06/23/jC3z6A.jpg',
  twinFantasy: 'https://s1.ax1x.com/2022/06/23/jC8PTf.jpg',
  care: 'https://s1.ax1x.com/2022/06/22/j9RuVK.jpg',
  artAngles: 'https://s1.ax1x.com/2022/06/22/j9Rmb6.jpg',
  melodrama: 'https://s1.ax1x.com/2022/06/22/j9R18H.jpg',
  ballads1: 'https://s1.ax1x.com/2022/06/22/j9RM5D.jpg',
  myBeautifulDarkTwistedFantasy: 'https://s1.ax1x.com/2022/06/22/j9RA29.jpg',
  igor: 'https://s1.ax1x.com/2022/06/22/j9R32d.jpg',
  gsgMixtape: 'https://s1.ax1x.com/2022/06/22/j9RJKI.jpg',
  nostalgiaUltra: 'https://s1.ax1x.com/2022/06/22/j9RZK1.jpg',
  moonRiver: 'https://s1.ax1x.com/2022/06/22/j9RlPe.jpg',
  blonde: 'https://s1.ax1x.com/2022/06/23/jC8SOI.jpg',
  carrieAndLowell: 'https://s1.ax1x.com/2022/06/23/jC8Fk8.jpg',
  lustForLife: 'https://s1.ax1x.com/2022/06/23/jC8C0P.jpg',
  kidA: 'https://s1.ax1x.com/2022/06/23/jCap8K.jpg',
  bloom: 'https://s1.ax1x.com/2022/06/22/j9REvR.jpg',
  channelOrange: 'https://s1.ax1x.com/2022/06/22/j9RFC4.jpg',
  ctrl: 'https://s1.ax1x.com/2022/06/22/j9RKUO.jpg',
  funeral: 'https://s1.ax1x.com/2022/06/22/j9ReDx.jpg',
  awakeMyLove: 'https://s1.ax1x.com/2022/06/22/j9R8xA.jpg',
}

const coverUrls = Object.values(covers)

const Scroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const locoScrollRef = useRef<any>(null)
  const preloaded = usePreload(coverUrls)

  useEffect(() => {
    if (preloaded) {
      if (scrollRef.current) {
        import('locomotive-scroll').then(({ default: LocomotiveScroll }) => {
          locoScrollRef.current = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            mobile: {
              breakpoint: 0,
              smooth: true,
              inertia: 0.8,
              getDirection: true,
            },
            tablet: {
              breakpoint: 0,
              smooth: true,
              inertia: 0.8,
              getDirection: true,
            }
          });
        })
      }
    }
  }, [preloaded])

  useEffect(() => {
    return () => {
      if (locoScrollRef.current) {
        locoScrollRef.current.destroy();
      }
    }
  }, [])

  const toTop = () => {
    if (!locoScrollRef.current) return
    locoScrollRef.current.scrollTo(scrollRef.current)
  }

  return (
    <div ref={scrollRef} data-scroll-section>
      <Landing
        title="倒带"
        subtitle="简单的音乐播放器"
        keywords={["轻量", "简洁"]}
        buttons={[
          {
            content: "下载",
            onClick: (router) => router.push("/download"),
          },
          {
            content: "更多",
            type: "ghost",
            onClick: (router) => router.push("/home"),
          },
        ]}
        scrollBtn={
          preloaded &&
          <motion.div
            className='absolute bottom-12 cursor-pointer active:scale-105'
            initial={{ translateY: -18 }}
            animate={{ translateY: 18 }}
            transition={{
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5,
            }}
            onClick={() => {
              locoScrollRef.current.scrollTo(scrollRef.current, {
                offset: window.innerHeight - 32
              })
            }}
          >
            <ChevronsDown size={36} />
          </motion.div>
        }
      />

      <section className="tiles tiles--rotated" id="grid2">
        <div className="tiles__wrap">
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.inRainbows})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.forEmma})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.twinFantasy})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.care})` }}></div>
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.care})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.artAngles})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.melodrama})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.ballads1})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.myBeautifulDarkTwistedFantasy})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.care})` }}></div>
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.igor})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.gsgMixtape})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.nostalgiaUltra})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.moonRiver})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.blonde})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.carrieAndLowell})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.lustForLife})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.igor})` }}></div>
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img"></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.kidA})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.funeral})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.awakeMyLove})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.inRainbows})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.bloom})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.channelOrange})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.kidA})` }}></div>
          </div>
          <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.channelOrange})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.artAngles})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.ctrl})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.care})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.kidA})` }}></div>
            <div className="tiles__line-img" style={{ backgroundImage: `url(${covers.channelOrange})` }}></div>
          </div>
        </div>
      </section>
      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
        data-scroll data-scroll-speed="2"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"https://s1.ax1x.com/2022/06/23/jCsakQ.png"}
          width="600px"
          alt="封面"
        />
      </section>
      <section className="content">
        <a
          className="backtop"
          data-scroll
          data-scroll-speed="4"
          onClick={toTop}
        >
          Rewind
        </a>
        <div className="frame frame--footer">
          <a href="https://github.com/KusStar" className="frame__author" target="__blank">@KusStar</a>
        </div>
      </section>
    </div>
  )
}

export default Scroll