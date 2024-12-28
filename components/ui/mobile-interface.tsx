'use client'

import { motion } from 'framer-motion'

export function MobileInterface() {
  const users = [
    { name: 'Savannah Nguyen', time: 'Just now', amount: '$64.43' },
    { name: 'Marvin McKinney', time: '11 minutes ago', amount: '$25.00' },
    { name: 'Ralph Edwards', time: '1 hour ago', amount: '$54.50' }
  ]

  return (
    <div className="bg-zinc-900 rounded-3xl p-4 w-[280px] shadow-xl">
      <div className="mb-4">
        <h4 className="text-sm mb-2">Your friends list</h4>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black" />
          ))}
          <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-sm">
            +
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {users.map((user, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between bg-zinc-800 rounded-xl p-2"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-600" />
              <div>
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-gray-400">Credit request • {user.time}</div>
              </div>
            </div>
            <div className="text-[#CCFF00] text-sm">{user.amount}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

