<template>
  <div class="itemHomeStay">
    <div class="imageitemHome">
      <img :src="data.images[0]" alt="test" class="imageHomeStay" />
    </div>
    <div class="informationHomeStay">
      <div class="informationHomeStay1">
        <div class="nameHomeStay">{{ data.name }}</div>
        <div :style="{ display: 'flex', gap: '10px', alignItems: 'flex-end' }">
          <div class="addressHomeStay">
            {{ data.address }}
          </div>
          <span :style="{ fontSize: '13px' }"> Cách trung tâm 3.6km </span>
        </div>
        <div class="amenitiesHomeStay">
          <div class="amenitiesTitle">Tiện nghi</div>
          <div v-for="value in data.amenities" :key="value">
            <div>- {{ value }}</div>
          </div>
        </div>
        <div class="descriptionHoneStay">{{ data.description }}</div>
      </div>
      <div>
        <div class="Evaluate">
          <div>
            <div class="Evaluate1">Rất tốt</div>
            <div class="EvaluateCount">53 đánh giá</div>
          </div>
          <div class="numberEvaluate">8,5</div>
        </div>
        <div class="onPrice">Hiển thị giá</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
  },
};
</script>
<style>
.itemHomeStay {
  display: flex;
  gap: 10px;
  border: 1px solid #dddddd;
  height: 230px;
  border-radius: 12px;
  width: 100;
}
.imageitemHome {
  padding: 15px;
}
.imageHomeStay {
  height: 205px;
  width: 205px;
  border-radius: 10px;
}
.informationHomeStay {
  margin-top: 10px;
  display: grid;
  grid-template-columns: 80% 20%;
  gap: 20px;
  width: 100%;
}
.informationHomeStay1 {
}
.nameHomeStay {
  color: #006ce4;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}
.addressHomeStay {
  color: #006ce4;
  font-weight: 600;
}
.descriptionHoneStay {
  margin-top: 5px;
  font-size: 14px;
}
.amenitiesHomeStay {
  font-size: 14px;
}
.amenitiesTitle {
  color: #006ce4;
  font-weight: 600;
}
.Evaluate {
  display: flex;
  gap: 5px;
}
.onPrice {
  width: 90px;
  height: 35px;
  background-color: #006ce4;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
  margin-top: 15px;
}
.EvaluateCount {
  color: gray;
  font-size: 12px;
}
.Evaluate1 {
  font-weight: 600;
}
.numberEvaluate {
  height: 30px;
  width: 30px;
  background-color: #003b95;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  border-radius: 5px;
}
</style>
