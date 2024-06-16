import React from 'react'
import SkillCard from '../SkillCard/SkillCard'


// Change 
const skills = [
  { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
  { name: 'Node.js', image: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png' },
  { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png' },
  { name: 'TypeScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
  { name: 'Git', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bctuHVp7CoSYIgexL8-iR5EfQq-E354UnA&s' },
  { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' },
  { name: '.NET', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/456px-Microsoft_.NET_logo.svg.png' },
]

export default function MySkillsSection() {
  return (
    <div className="flex flex-col items-center px-40 py-20">
      <h2 className="text-4xl text-center font-semibold mb-5">My Skills</h2>
      {skills.length > 0 ? (
        <div className="flex flex-wrap justify-between">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skillName={skill.name}
              skillImage={skill.image}
            />
          ))}
        </div>
      ) : (
        <p className="text-xl text-center">
          Skills will be added soon. Stay tuned!
        </p>
      )}
    </div>
  )
}