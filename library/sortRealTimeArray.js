const sortRealTimeArray = async realTimeArray => {
  return realTimeArray.sort((a, b) => {
    if (a.lineId === b.lineId) {
      return a.arriveTime < b.arriveTime ? -1 : 1;
    } else {
      return a.lineId < b.lineId ? -1 : 1;
    }
  });
};

export default sortRealTimeArray;
