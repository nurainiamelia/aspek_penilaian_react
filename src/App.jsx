import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState({});

  const aspekPenilaian = [
    "aspek_penilaian_1",
    "aspek_penilaian_2",
    "aspek_penilaian_3",
    "aspek_penilaian_4",
    "aspek_penilaian_5",
    "aspek_penilaian_6",
    "aspek_penilaian_7",
    "aspek_penilaian_8",
    "aspek_penilaian_9",
    "aspek_penilaian_10",
  ];
  const mahasiswa = [
    "mahasiswa_1",
    "mahasiswa_2",
    "mahasiswa_3",
    "mahasiswa_4",
  ];

  const handleChange = (aspek, mhs, value) => {
    setData((prevData) => ({
      ...prevData,
      [aspek]: {
        ...prevData[aspek],
        [mhs]: value,
      },
    }));
  };

  const handleSimpan = () => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="table">
        <div className="cell header"></div>
        {aspekPenilaian.map((aspek) => (
          <div key={aspek} className="cell header">
            {aspek}
          </div>
        ))}
        {mahasiswa.map((mhs) => (
          <>
            <div key={mhs} className="cell header">
              {mhs}
            </div>
            {aspekPenilaian.map((aspek) => (
              <div key={`${mhs}-${aspek}`} className="cell">
                <select
                  className="dropdown"
                  onChange={(e) => handleChange(aspek, mhs, e.target.value)}
                >
                  <option value="">Pilih Nilai</option>
                  {[...Array(10)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </>
        ))}
      </div>
      <button onClick={handleSimpan}>Simpan</button>
    </div>
  );
};

export default App;
