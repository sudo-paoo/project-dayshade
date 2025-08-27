"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Top left green circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
          duration: 2,
        }}
        className="absolute top-20 left-10"
      >
  <Image src="/assets/circle-green.png" alt="Green circle" width={280} height={280} />
      </motion.div>

      {/* Top right purple circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.7 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.8,
          duration: 2,
        }}
        className="absolute top-32 right-16"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={100} height={100} />
      </motion.div>

      {/* Middle left purple circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.1,
          duration: 2,
        }}
        className="absolute top-1/2 left-8 transform -translate-y-1/2"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={80} height={80} />
      </motion.div>

      {/* Middle right green circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.4,
          duration: 2,
        }}
        className="absolute top-2/3 right-12"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={90} height={90} />
      </motion.div>

      {/* Bottom left large green circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.6,
          duration: 2,
        }}
        className="absolute bottom-20 left-[-2rem]"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={200} height={200} />
      </motion.div>

      {/* Bottom right large purple circle */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.9,
          duration: 2,
        }}
        className="absolute bottom-[-3rem] right-[-3rem]"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={250} height={250} />
      </motion.div>

      {/* Additional floating circles for more depth */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.2,
          y: [0, -20, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2.2,
          duration: 2,
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-1/4 left-1/3"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={60} height={60} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.25,
          y: [0, 15, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2.5,
          duration: 2,
          y: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-3/4 right-1/3"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={70} height={70} />
      </motion.div>

      {/* Small accent circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.15,
          x: [0, 10, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2.8,
          duration: 2,
          x: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-16 left-1/2"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={40} height={40} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.18,
          x: [0, -15, 0],
          y: [0, 35, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 3.1,
          duration: 2,
          x: {
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          y: {
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-1/3 left-1/4"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={50} height={50} />
      </motion.div>

      {/* Medium circles for layering */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.3,
          y: [0, -10, 0],
          x: [0, 8, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 3.4,
          duration: 2,
          y: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          x: {
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-1/3 right-1/4"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={110} height={110} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.22,
          y: [0, 12, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 3.7,
          duration: 2,
          y: {
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-1/4 right-1/2"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={85} height={85} />
      </motion.div>

      {/* Tiny accent circles for sparkle effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.12,
          rotate: [0, 360],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 4.0,
          duration: 2,
          rotate: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={30} height={30} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.1,
          y: [0, -25, 0],
          x: [0, 12, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 4.3,
          duration: 2,
          y: {
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          x: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-2/3 left-2/3"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={35} height={35} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.14,
          x: [0, -18, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 4.6,
          duration: 2,
          x: {
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-1/6 right-1/3"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={45} height={45} />
      </motion.div>

      {/* First spinning star - top area */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{
          scale: 7,
          opacity: 0.6,
          rotate: [0, 360],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 1.2,
          duration: 2,
          rotate: {
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
        className="absolute top-65 right-1/4"
      >
        <Image src="/assets/star-3.png" alt="Purple star" width={60} height={60} />
      </motion.div>

      {/* Second spinning star - bottom area */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{
          scale: 8,
          opacity: 0.5,
          rotate: [0, -360],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 2.7,
          duration: 2,
          rotate: {
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
        className="absolute bottom-1/7 left-1/3"
      >
        <Image src="/assets/star-4.png" alt="Purple star" width={75} height={75} />
      </motion.div>
      
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.16,
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 5.0,
          duration: 2,
          y: {
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          rotate: {
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
        className="absolute top-10 left-2/3"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={65} height={65} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.13,
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 5.3,
          duration: 2,
          x: {
            duration: 11,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          y: {
            duration: 13,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-1/3 left-1/6"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={55} height={55} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.19,
          rotate: [0, -180, -360],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 5.6,
          duration: 2,
          rotate: {
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
        className="absolute bottom-1/2 right-1/6"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={75} height={75} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.11,
          y: [0, 25, 0],
          x: [0, -10, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 5.9,
          duration: 2,
          y: {
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          x: {
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-3/5 left-1/5"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={40} height={40} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.21,
          x: [0, -25, 0],
          y: [0, 10, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 6.2,
          duration: 2,
          x: {
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          y: {
            duration: 19,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-1/5 right-1/5"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={90} height={90} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.08,
          y: [0, -20, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 6.5,
          duration: 2,
          y: {
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          rotate: {
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
        className="absolute bottom-1/5 left-3/5"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={25} height={25} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.21,
          x: [0, -25, 0],
          y: [0, 10, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 6.8,
          duration: 2,
          x: {
            duration: 17,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          y: {
            duration: 19,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-2/5 right-2/5"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={95} height={95} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.15,
          rotate: [0, 360],
          y: [0, -35, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 7.1,
          duration: 2,
          rotate: {
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
          y: {
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-2/5 right-3/5"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={70} height={70} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.09,
          x: [0, 30, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 7.4,
          duration: 2,
          x: {
            duration: 21,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
        }}
        className="absolute top-4/5 left-2/5"
      >
        <Image src="/assets/circle-purple.png" alt="Purple circle" width={35} height={35} />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.12,
          y: [0, 18, 0],
          x: [0, -12, 0],
          rotate: [0, -90, -180, -270, -360],
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 7.7,
          duration: 2,
          y: {
            duration: 13,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          x: {
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          },
          rotate: {
            duration: 28,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          },
        }}
        className="absolute top-1/6 left-4/5"
      >
        <Image src="/assets/circle-green.png" alt="Green circle" width={50} height={50} />
      </motion.div>
    </div>
  )
}
