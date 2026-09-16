import { useState, useEffect } from 'react';
import { fetchUserData } from './services/userService';

export default function App() {
  // 1. useState: จำสภาวะข้อมูลในระบบ
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  // 2. useEffect: ตรวจจับการโหลดหน้าเว็บเพื่อดึงข้อมูลภายนอกครั้งแรก
  useEffect(() => {
    fetchUserData()
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []); // [] ทำงานครั้งเดียวเมื่อ Mount

  // 3. Event Handling: ฟังก์ชันจัดการเหตุการณ์กดปุ่ม
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  if (loading) return
