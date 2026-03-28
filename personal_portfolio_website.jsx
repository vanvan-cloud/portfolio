import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [dark, setDark] = useState(false);

  return (
    <div className={"min-h-screen p-6 transition-all duration-500 " + (dark ? "bg-gray-900 text-white" : "bg-slate-50 text-slate-900")}>
      {/* Toggle */}
      <div className="flex justify-end mb-8">
        <Button onClick={() => setDark(!dark)} variant="outline">
          {dark ? "Light" : "Dark"}
        </Button>
      </div>

      <div className="max-w-5xl mx-auto space-y-10">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://i.pinimg.com/736x/4d/5b/6a/4d5b6a8f1c9c6c2c2d8b0d3f7f8b5c2d.jpg"
            className="w-28 h-28 mx-auto rounded-full mb-4 border border-slate-300"
          />
          <h1 className="text-3xl font-bold text-slate-800">Tường Vân</h1>
          <p className="text-slate-500">Student | Private Tutor</p>
        </motion.div>

        {/* About */}
        <Card className="shadow-sm border border-slate-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3 text-slate-700">About Me</h2>
            <p className="text-sm leading-relaxed text-slate-600">
              I am currently working as a part-time tutor, helping students improve their academic performance. I enjoy simplifying difficult concepts and supporting students in building confidence in their learning.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="shadow-sm border border-slate-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-700">Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-slate-800">Private Tutor (Part-time)</h3>
                <ul className="list-disc ml-5 text-sm mt-2 space-y-2 text-slate-600">
                  <li>
                    Tutored 5+ students (grade 5–7) in Math and Vietnamese through personalized 1-on-1 sessions, adapting teaching methods based on each student’s level and learning style.
                  </li>
                  <li>
                    Achieved significant score improvements: grade 6 (7.0 → 9.0), grade 7 (5.0 → 8.0), and grade 5 students (6.0 → 8.0, 8.0 → 9.0).
                  </li>
                  <li>
                    Designed structured lesson plans, including theory review, guided practice, and homework assignments to reinforce understanding.
                  </li>
                  <li>
                    Monitored weekly progress and adjusted teaching strategies to address weaknesses and ensure consistent improvement.
                  </li>
                  <li>
                    Helped students build confidence, independent learning habits, and better problem-solving skills over time.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className="shadow-sm border border-slate-200">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 text-slate-700">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              <div className="p-3 bg-slate-100 rounded-lg">Communication</div>
              <div className="p-3 bg-slate-100 rounded-lg">Teaching</div>
              <div className="p-3 bg-slate-100 rounded-lg">Patience</div>
              <div className="p-3 bg-slate-100 rounded-lg">Problem Solving</div>
              <div className="p-3 bg-slate-100 rounded-lg">Time Management</div>
              <div className="p-3 bg-slate-100 rounded-lg">Basic Computer</div>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="shadow-sm border border-slate-200">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-3 text-slate-700">Contact</h2>
            <p className="text-sm text-slate-600">k63.2415310102@ftu.edu.vn</p>
            <p className="text-sm mt-1 text-slate-600">0986 435 516</p>
            <p className="text-sm mt-1 text-slate-600">Hà Nội</p>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
