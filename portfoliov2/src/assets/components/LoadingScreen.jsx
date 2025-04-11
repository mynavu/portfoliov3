import { useState, useEffect } from 'react'
export const LoadingScreen = ({ onComplete }) => {

useEffect(() => {
    setTimeout(() => {
      onComplete();
    }, 3000);
  }, []); // Empty array means it runs once on mount

    return <div>
        <div className="loader">
        </div>
        
    </div>
}