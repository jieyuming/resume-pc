<template>
  <div>
    <el-container class="index-con" style="height: 100%">
      <el-aside class="header">
        <navcon></navcon>
      </el-aside>
      <el-container class="main-content">
        <div class="main">
          <div class="main-body">
            <leftnav ref="leftnav" @onTabChange="onTabChange"></leftnav>
            <div class="resume">
              <div class="content">
                <div class="message-list">
                  <!-- 无个人信息 -->
                  <div class="item" style="margin-top: 0">
                    <div class="alpha">
                      <div class="text">{{ navigationList[0]["name"] }}</div>
                    </div>
                    <div
                      v-if="userInfoStatus !== 2"
                      class="beta hidden"
                      @click="editUserInfo"
                    >
                      <img
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <span>编辑</span>
                    </div>
                  </div>
                  <!-- 有个人信息展示 -->
                  <div class="user-info common" v-if="userInfoStatus === 1">
                    <img
                      class="header-img"
                      src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201410%2F06%2F20141006220027_JeHJZ.thumb.700_0.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620206275&t=b7ce5909c68478b7ca610739f3f5627e"
                    />
                    <div class="message">
                      <div class="name">张某某</div>
                      <div class="base">
                        女<span class="line">|</span>未婚<span class="line"
                          >|</span
                        >1992.10
                      </div>
                    </div>
                  </div>
                  <!-- 个人信息编辑 -->
                  <div
                    v-if="userInfoStatus === 2"
                    class="common-edit user-info-edit"
                  >
                    <div class="alpha">
                      <div class="images-box">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">照片</span>
                        </div>
                        <!--可使用上传限制 :before-upload="beforeAvatarUpload" -->
                        <div class="upload">
                          <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                          >
                            <img
                              v-if="imageUrl"
                              :src="imageUrl"
                              class="avatar"
                            />
                            <img
                              v-else
                              class="header"
                              src="../assets/images/default-header.png"
                              alt=""
                            />
                          </el-upload>
                        </div>
                        <div class="tip">
                          点击添加jpg格式照片，照片大小不超300k，最佳长宽比为3:2
                        </div>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">姓</span>
                        </div>
                        <el-input
                          v-model="form1.input1"
                          placeholder="请输入你的姓"
                        ></el-input>
                      </div>
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">姓名拼音</span>
                        </div>
                        <el-input
                          v-model="form1.input2"
                          placeholder="姓名拼音为小写字母"
                        ></el-input>
                      </div>
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">性别</span>
                        </div>
                        <div class="radio-list">
                          <div
                            @click="chooseSex(0)"
                            class="sex-item"
                            :class="form1.input3 === 0 ? 'active' : ''"
                            style="margin: 0 16px 0 0"
                          >
                            男
                          </div>
                          <div
                            @click="chooseSex(1)"
                            class="sex-item"
                            :class="form1.input3 === 1 ? 'active' : ''"
                          >
                            女
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">名</span>
                        </div>
                        <el-input
                          v-model="form1.input4"
                          placeholder="请输入你的名"
                        ></el-input>
                      </div>
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">出生日期</span>
                        </div>
                        <el-date-picker
                          v-model="form1.input5"
                          type="date"
                          placeholder="请选择出生日期"
                        >
                        </el-date-picker>
                      </div>
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">婚姻状况</span>
                        </div>

                        <el-select
                          v-model="form1.input6"
                          placeholder="请选择婚姻状况"
                        >
                          <el-option
                            v-for="item in marryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">参加工作时间</span>
                        </div>
                        <el-date-picker
                          v-model="form1.input7"
                          type="date"
                          placeholder="请选择工作日期"
                        >
                        </el-date-picker>
                      </div>
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">籍贯</span>
                        </div>

                        <el-cascader
                          placeholder="请选择籍贯"
                          v-model="form1.input8"
                          :options="options"
                          @change="handleChange"
                        ></el-cascader>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">民族</span>
                        </div>

                        <el-select
                          v-model="form1.input11"
                          placeholder="请选择名族"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">社保账号</span>
                        </div>
                        <el-input
                          v-model="form1.input13"
                          placeholder="请输入社保账号"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">政治面貌</span>
                        </div>

                        <el-select
                          v-model="form1.input12"
                          placeholder="请选择政治面貌"
                        >
                          <el-option
                            v-for="item in input12List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">公积金账号</span>
                        </div>
                        <el-input
                          v-model="form1.input14"
                          placeholder="请输入公积金账号"
                        ></el-input>
                      </div>
                    </div>
                    <div class="beta-box">
                      <div class="align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">户口类别</span>
                          </div>

                          <el-select
                            v-model="form1.input9"
                            placeholder="请选择户口类别"
                          >
                            <el-option
                              v-for="item in categoryList"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </div>
                      </div>
                      <div class="right-align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">户口所在地</span>
                          </div>

                          <el-input
                            v-model="form1.input15"
                            placeholder="请输入户口所在地"
                          ></el-input>
                        </div>
                      </div>
                    </div>
                    <div class="beta-box">
                      <div class="align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">血型</span>
                          </div>

                          <el-select
                            v-model="form1.input10"
                            placeholder="请选择血型"
                          >
                            <el-option
                              v-for="item in bloodList"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </div>
                      </div>
                      <div class="right-align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark hidden">*</span>
                            <span class="label">个人电子邮箱</span>
                          </div>

                          <el-input
                            v-model="form1.input16"
                            placeholder="请输入个人电子邮箱"
                          ></el-input>
                        </div>
                      </div>
                    </div>
                    <div class="save-box">
                      <div class="save-btn" @click="saveUserInfo">保存</div>
                    </div>
                  </div>
                  <!-- 无身份信息 -->
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[1]["name"] }}</div>
                    </div>
                    <div
                      v-if="identityStatus !== 2"
                      class="beta hidden"
                      @click="editIdentity"
                    >
                      <img
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <span>编辑</span>
                    </div>
                  </div>
                  <!-- 有身份证信息就展示 -->
                  <div v-if="identityStatus === 1" class="identity-info common">
                    <span>中国</span>
                    <span class="card-number">441428888888888888</span>
                    <span>2019.02.11-2039.02.11</span>
                  </div>
                  <!-- 编辑身份信息 -->
                  <div
                    class="user-info-edit common-edit"
                    v-if="identityStatus === 2"
                    style="padding-bottom: 0"
                  >
                    <div class="beta-box">
                      <div class="align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">国家/地区</span>
                          </div>

                          <el-select
                            v-model="form1.input17"
                            placeholder="请选择国家/地区"
                          >
                            <el-option
                              v-for="item in categoryList"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </div>
                      </div>
                      <div class="right-align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">身份证件号码</span>
                          </div>

                          <el-input
                            v-model="form1.input18"
                            placeholder="请输入身份证件号码"
                          ></el-input>
                        </div>
                      </div>
                    </div>
                    <div class="beta-box">
                      <div class="align" style="margin-right: 38px">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">身份证有效期开始日期</span>
                          </div>

                          <el-date-picker
                            v-model="form1.input19"
                            type="date"
                            placeholder="请选择开始日期"
                          >
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark hidden">*</span>
                            <span class="label">身份证有效期结束日期</span>
                          </div>

                          <el-date-picker
                            v-model="form1.input20"
                            type="date"
                            placeholder="请选择结束日期"
                          ></el-date-picker>
                        </div>
                      </div>
                      <div class="align flex-1">
                        <div class="save-btn" @click="saveIdentity">保存</div>
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[2]["name"] }}</div>
                    </div>
                    <div
                      v-if="cardStatus !== 2"
                      class="beta hidden"
                      @click="editCard"
                    >
                      <img
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <span>编辑</span>
                    </div>
                  </div>
                  <!-- 有银行卡信息就展示 -->
                  <div class="card-info common" v-if="cardStatus === 1">
                    <span>建设银行</span>
                    <span class="card-number">123123441428888888</span>
                    <span>张某某</span>
                  </div>
                  <!-- 银行卡编辑 -->
                  <div
                    class="user-info-edit common-edit"
                    v-if="cardStatus === 2"
                  >
                    <div class="beta-box">
                      <div class="align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">开户银行</span>
                          </div>

                          <el-select
                            v-model="form1.input21"
                            placeholder="请选择开户银行"
                          >
                            <el-option
                              v-for="item in categoryList"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </div>
                      </div>
                      <div class="right-align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">银行账号</span>
                          </div>

                          <el-input
                            v-model="form1.input22"
                            placeholder="请输入银行账号"
                          ></el-input>
                        </div>
                      </div>
                    </div>
                    <div class="beta-box">
                      <div class="align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">银行开户名</span>
                          </div>

                          <el-input
                            v-model="form1.input23"
                            placeholder="请输入银行开户名"
                          ></el-input>
                        </div>
                      </div>
                    </div>
                    <div class="save-box">
                      <div class="save-btn" @click="saveCard">保存</div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[3]["name"] }}</div>
                    </div>
                    <div
                      v-if="educationStatus !== 2"
                      class="beta hidden"
                      @click="editEducation"
                    >
                      <img
                        v-if="educationStatus === 0"
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <img
                        v-if="educationStatus === 1"
                        class="add-icon"
                        src="../assets/images/add.png"
                        alt=""
                      />
                      <span>{{
                        educationStatus === 0 ? "编辑" : "添加学历"
                      }}</span>
                    </div>
                  </div>
                  <!-- 学历信息展示 -->
                  <div v-if="educationStatus === 1" class="project-list common">
                    <div
                      class="project-item"
                      v-for="(item, index) in testList"
                      :key="index"
                    >
                      <div class="alpha">
                        <div class="message">
                          <span>学校名称</span>
                          <span class="time"
                            >2015.04-2019.02（入学日期-毕业日期）</span
                          >
                        </div>
                        <div class="operation">
                          <img
                            class="delete-icon"
                            src="../assets/images/delete.png"
                            alt=""
                          />
                          <span>删除</span>
                        </div>
                      </div>
                      <div class="beta">
                        教育程度·学位 <span class="line">|</span> 专业
                      </div>
                    </div>
                  </div>
                  <!-- 学历信息编辑 -->
                  <div
                    v-if="educationStatus === 2"
                    class="common-edit user-info-edit"
                    style="padding-bottom: 0"
                  >
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">教育程度</span>
                        </div>

                        <el-select
                          v-model="form1.input24"
                          placeholder="请选择教育程度"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">学位</span>
                        </div>

                        <el-select
                          v-model="form1.input25"
                          placeholder="请选择学位"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">授予学位国家</span>
                        </div>

                        <el-select
                          v-model="form1.input26"
                          placeholder="请选择授予学位国家"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">毕业学校</span>
                        </div>

                        <el-select
                          v-model="form1.input27"
                          placeholder="请选择毕业学校"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="right-align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">学校名称</span>
                        </div>

                        <el-input
                          v-model="form1.input28"
                          placeholder="毕业学校选择手动输入时，才需要手动填写学校名称"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">学习形式</span>
                        </div>

                        <el-select
                          v-model="form1.input29"
                          placeholder="请选择学习形式"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">专业</span>
                        </div>

                        <el-input
                          v-model="form1.input30"
                          placeholder="请输入专业"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">最高学历</span>
                        </div>
                        <div class="radio-list">
                          <div
                            @click="chooseHighest(0)"
                            class="sex-item"
                            :class="form1.input31 === 0 ? 'active' : ''"
                            style="margin: 0 16px 0 0"
                          >
                            是
                          </div>
                          <div
                            @click="chooseHighest(1)"
                            class="sex-item"
                            :class="form1.input31 === 1 ? 'active' : ''"
                          >
                            否
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="beta-box">
                      <div class="align" style="margin-right: 38px">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">入学日期</span>
                          </div>

                          <el-date-picker
                            v-model="form1.input32"
                            type="date"
                            placeholder="请选择入学日期"
                          >
                          </el-date-picker>
                        </div>
                      </div>
                      <div class="align">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark">*</span>
                            <span class="label">毕业日期</span>
                          </div>

                          <el-date-picker
                            v-model="form1.input33"
                            type="date"
                            placeholder="请选择毕业日期"
                          ></el-date-picker>
                        </div>
                      </div>
                      <div class="align flex-1">
                        <div class="save-btn" @click="saveEducationStatus">
                          保存
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 无职称 -->
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[4]["name"] }}</div>
                    </div>
                    <div
                      v-if="professionStatus !== 2"
                      class="beta hidden"
                      @click="editProfession"
                    >
                      <img
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <span>{{
                        professionStatus === 0 ? "编辑" : "添加职称"
                      }}</span>
                    </div>
                  </div>
                  <!-- 职称信息模块展示 -->
                  <div
                    class="project-list common"
                    v-if="professionStatus === 1"
                  >
                    <div
                      class="project-item"
                      v-for="(item, index) in testList"
                      :key="index"
                    >
                      <div class="alpha">
                        <div class="message">
                          <span>职称字段</span>
                          <span class="time">2019.12.13</span>
                        </div>
                        <div class="operation">
                          <img
                            class="delete-icon"
                            src="../assets/images/delete.png"
                            alt=""
                          />
                          <span>删除</span>
                        </div>
                      </div>
                      <div class="beta">
                        评审机构 <span class="line">|</span> 证书编号
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="professionStatus === 2"
                    class="common-edit user-info-edit"
                  >
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">日期</span>
                        </div>

                        <el-date-picker
                          v-model="form1.input34"
                          type="date"
                          placeholder="请选择日期"
                        ></el-date-picker>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">职称</span>
                        </div>

                        <el-select
                          v-model="form1.input35"
                          placeholder="请选择职称"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">评审机构</span>
                        </div>

                        <el-select
                          v-model="form1.input36"
                          placeholder="请选择评审机构"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="beta-box">
                      <div class="right-align" style="margin-left: 0">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark hidden">*</span>
                            <span class="label">证书编号</span>
                          </div>

                          <el-input
                            v-model="form1.input37"
                            placeholder="请输入证书编号"
                          ></el-input>
                        </div>
                      </div>
                      <div
                        class="align flex-1"
                        style="
                          flex-direction: column-reverse;
                          align-items: flex-end;
                        "
                      >
                        <div class="save-btn" @click="saveProfessionStatus">
                          保存
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 无资格信息 -->
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[5]["name"] }}</div>
                    </div>
                    <div
                      v-if="qualificationStatus !== 2"
                      class="beta hidden"
                      @click="editQualification"
                    >
                      <img
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <span>{{
                        qualificationStatus === 0 ? "编辑" : "添加职业资格"
                      }}</span>
                    </div>
                  </div>
                  <!-- 职业资格模块展示 -->
                  <div
                    class="project-list common"
                    v-if="qualificationStatus === 1"
                  >
                    <div
                      class="project-item"
                      v-for="(item, index) in testList"
                      :key="index"
                    >
                      <div class="alpha">
                        <div class="message">
                          <span>职业资格字段</span>
                          <span class="time"
                            >2009.02.12-2021.05.23(日期-到期日期）</span
                          >
                        </div>
                        <div class="operation">
                          <img
                            class="delete-icon"
                            src="../assets/images/delete.png"
                            alt=""
                          />
                          <span>删除</span>
                        </div>
                      </div>
                      <div class="beta">
                        名称 <span class="line">|</span> 签发
                      </div>
                    </div>
                  </div>
                  <!-- 资格编辑 -->
                  <div
                    v-if="qualificationStatus === 2"
                    class="common-edit user-info-edit"
                  >
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">日期</span>
                        </div>

                        <el-date-picker
                          v-model="form1.input38"
                          type="date"
                          placeholder="请选择日期"
                        ></el-date-picker>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">职业资格</span>
                        </div>

                        <el-select
                          v-model="form1.input39"
                          placeholder="请选择职业资格"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">号码</span>
                        </div>

                        <el-input
                          v-model="form1.input40"
                          placeholder="请输入号码"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">到期日期</span>
                        </div>

                        <el-date-picker
                          v-model="form1.input41"
                          type="date"
                          placeholder="请选择日期"
                        ></el-date-picker>
                      </div>
                    </div>
                    <div class="right-align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">名称</span>
                        </div>

                        <el-input
                          v-model="form1.input42"
                          placeholder="请输入名称"
                        ></el-input>
                      </div>
                    </div>
                    <div class="beta-box">
                      <div class="right-align" style="margin-left: 0">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark hidden">*</span>
                            <span class="label">签发机构</span>
                          </div>

                          <el-input
                            v-model="form1.input43"
                            placeholder="请输入签发机构"
                          ></el-input>
                        </div>
                      </div>
                      <div
                        class="align flex-1"
                        style="
                          flex-direction: column-reverse;
                          align-items: flex-end;
                        "
                      >
                        <div class="save-btn" @click="saveQualificationStatus">
                          保存
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 无爱好 -->
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[6]["name"] }}</div>
                    </div>
                    <div
                      v-if="hobbyStatus !== 2"
                      class="beta hidden"
                      @click="edithobby"
                    >
                      <img
                        v-if="hobbyStatus === 0"
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />

                      <img
                        v-if="hobbyStatus === 1"
                        class="add-icon"
                        src="../assets/images/add.png"
                        alt=""
                      />
                      <span>{{
                        hobbyStatus === 0 ? "编辑" : "添加兴趣爱好"
                      }}</span>
                    </div>
                  </div>
                  <!-- 展示兴趣爱好 -->
                  <div v-if="hobbyStatus === 1" class="hobby-list common">
                    <div
                      class="hobby-item"
                      v-for="(item, index) in hobbyList"
                      :key="index"
                    >
                      <div class="hobby-content">
                        <span class="title">爱好名称</span>
                      </div>
                      <div class="operation">
                        <img
                          class="delete-icon"
                          src="../assets/images/delete.png"
                          alt=""
                        />
                        <span>删除</span>
                      </div>
                    </div>
                  </div>
                  <!-- 兴趣爱好编辑 支持多选 -->
                  <div
                    v-if="hobbyStatus === 2"
                    class="common-edit user-info-edit"
                    style="padding: 17px 40px 33px 19px"
                  >
                    <div class="beta-box" style="align-items: center">
                      <div class="single">
                        <span class="mark">*</span>
                        <el-select
                          :multiple="true"
                          v-model="form1.input58"
                          placeholder="兴趣爱好"
                          style="width: 121px"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                      <div class="save-btn" @click="savehobbyStatus">保存</div>
                    </div>
                  </div>
                  <!-- 无地址信息 -->
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[7]["name"] }}</div>
                    </div>
                    <div class="beta hidden" @click="editAddressStatus">
                      <img
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <span>编辑</span>
                    </div>
                  </div>
                  <!-- 地址信息展示 -->
                  <div class="common address-list" v-if="addressStatus === 1">
                    <div class="address-item">
                      <div class="address-box">
                        <span>广东省广州市天河区</span>
                      </div>
                    </div>
                    <div class="address-item">
                      <div class="address-box">
                        <span>家庭地址</span>
                      </div>
                    </div>
                  </div>
                  <!-- 地址信息编辑 -->
                  <div
                    v-if="addressStatus === 2"
                    class="common-edit address-edit"
                  >
                    <div class="single" style="padding: 0 0 16px">
                      <span class="mark">*</span>
                      <div class="line-form-item">
                        <el-input
                          v-model="form1.input59"
                          placeholder="现居住地址"
                        ></el-input>
                      </div>
                    </div>
                    <div class="single" style="padding: 0 0 16px">
                      <span class="mark">*</span>
                      <div class="line-form-item">
                        <el-input
                          v-model="form1.input60"
                          placeholder="家庭地址"
                        ></el-input>
                      </div>
                    </div>

                    <div class="save-box">
                      <div class="save-btn" @click="saveaddressStatus">
                        保存
                      </div>
                    </div>
                  </div>
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[8]["name"] }}</div>
                    </div>
                    <div
                      v-if="telephoneStatus !== 2"
                      class="beta hidden"
                      @click="editTelephoneStatus"
                    >
                      <img
                        v-if="telephoneStatus === 0"
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <img
                        v-if="telephoneStatus === 1"
                        class="add-icon"
                        src="../assets/images/add.png"
                        alt=""
                      />
                      <span>{{
                        telephoneStatus === 0 ? "编辑" : "添加电话号码"
                      }}</span>
                    </div>
                  </div>
                  <!-- 电话信息展示 -->
                  <div v-if="telephoneStatus === 1" class="project-list common">
                    <div
                      class="project-item"
                      v-for="(item, index) in testList"
                      :key="index"
                    >
                      <div class="alpha">
                        <div class="message">
                          <span>电话号码</span>
                          <span
                            class="tag"
                            :class="index === 0 ? 'first-tag' : ''"
                            >首选</span
                          >
                        </div>
                        <div class="operation">
                          <img
                            class="delete-icon"
                            src="../assets/images/delete.png"
                            alt=""
                          />
                          <span>删除</span>
                        </div>
                      </div>
                      <div class="beta">
                        电话类型 <span class="line">|</span> 分机
                      </div>
                    </div>
                  </div>
                  <!-- 电话信息编辑 -->
                  <div
                    v-if="telephoneStatus === 2"
                    class="common-edit user-info-edit"
                  >
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">电话类型</span>
                        </div>

                        <el-select
                          v-model="form1.input44"
                          placeholder="请选择电话类型"
                        >
                          <el-option
                            v-for="item in categoryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">电话号码</span>
                        </div>

                        <el-input
                          v-model="form1.input45"
                          placeholder="请输入电话号码"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">分机</span>
                        </div>

                        <el-input
                          v-model="form1.input46"
                          placeholder="请输入分机"
                        ></el-input>
                      </div>
                    </div>
                    <div class="save-box">
                      <div class="save-btn" @click="savetelephoneStatus">
                        保存
                      </div>
                    </div>
                  </div>
                  <!-- 无工作经历信息 -->
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[9]["name"] }}</div>
                    </div>
                    <div
                      v-if="experienceStatus !== 2"
                      class="beta hidden"
                      @click="editExperienceStatus"
                    >
                      <img
                        v-if="experienceStatus === 0"
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <img
                        v-if="experienceStatus === 1"
                        class="add-icon"
                        src="../assets/images/add.png"
                        alt=""
                      />
                      <span>{{
                        experienceStatus === 0 ? "编辑" : "添加工作经历"
                      }}</span>
                    </div>
                  </div>
                  <!-- 过往工作经历展示 -->
                  <div
                    v-if="experienceStatus === 1"
                    class="project-list common"
                  >
                    <div
                      class="project-item"
                      v-for="(item, index) in testList"
                      :key="index"
                    >
                      <div class="alpha">
                        <div class="message">
                          <span>单位名称</span>
                          <span class="time">开始时间-结束时间</span>
                        </div>
                        <div class="operation">
                          <img
                            class="delete-icon"
                            src="../assets/images/delete.png"
                            alt=""
                          />
                          <span>删除</span>
                        </div>
                      </div>
                      <div class="beta">
                        所属行业 <span class="line">|</span> 最后职位
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="experienceStatus === 2"
                    class="common-edit user-info-edit"
                  >
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">开始日期</span>
                        </div>

                        <el-date-picker
                          v-model="form1.input47"
                          type="date"
                          placeholder="请选择开始日期"
                        ></el-date-picker>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">结束日期</span>
                        </div>

                        <el-date-picker
                          v-model="form1.input48"
                          type="date"
                          placeholder="请选择结束日期"
                        ></el-date-picker>
                      </div>
                    </div>
                    <div class="align"></div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">所属行业</span>
                        </div>

                        <el-select
                          v-model="form1.input49"
                          placeholder="请选择所属行业"
                        >
                          <el-option
                            v-for="item in categoryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="right-align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">过往工作单位名称</span>
                        </div>

                        <el-input
                          v-model="form1.input50"
                          placeholder="请输入过往工作单位名称"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">国家</span>
                        </div>

                        <el-select
                          v-model="form1.input51"
                          placeholder="请选择国家"
                        >
                          <el-option
                            v-for="item in categoryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">州/省</span>
                        </div>

                        <el-select
                          v-model="form1.input52"
                          placeholder="请选择州/省"
                        >
                          <el-option
                            v-for="item in categoryList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">城市</span>
                        </div>

                        <el-input
                          v-model="form1.input53"
                          placeholder="请输入城市"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark">*</span>
                          <span class="label">最后职位</span>
                        </div>

                        <el-input
                          v-model="form1.input54"
                          placeholder="请输入最后职位"
                        ></el-input>
                      </div>
                    </div>
                    <div class="right-align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">工作职责描述</span>
                        </div>

                        <el-input
                          v-model="form1.input55"
                          placeholder="请输入工作职责描述"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">证明人</span>
                        </div>

                        <el-input
                          v-model="form1.input56"
                          placeholder="请输入证明人"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align">
                      <div class="form-item">
                        <div class="label-box">
                          <span class="mark hidden">*</span>
                          <span class="label">联系电话</span>
                        </div>

                        <el-input
                          v-model="form1.input57"
                          placeholder="请输入联系电话"
                        ></el-input>
                      </div>
                    </div>
                    <div class="align"></div>
                    <div class="beta-box">
                      <div class="right-align" style="margin-left: 0">
                        <div class="form-item">
                          <div class="label-box">
                            <span class="mark hidden">*</span>
                            <span class="label">离职原因</span>
                          </div>

                          <el-input
                            v-model="form1.input43"
                            placeholder="请输入离职原因"
                          ></el-input>
                        </div>
                      </div>
                      <div
                        class="align flex-1"
                        style="
                          flex-direction: column-reverse;
                          align-items: flex-end;
                        "
                      >
                        <div class="save-btn" @click="saveExperienceStatus">
                          保存
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 无家庭成员 -->
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[10]["name"] }}</div>
                    </div>
                    <div
                      v-if="memberStatus !== 2"
                      class="beta hidden"
                      @click="editMemberStatus"
                    >
                      <img
                        v-if="memberStatus === 0"
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <img
                        v-if="memberStatus === 1"
                        class="add-icon"
                        src="../assets/images/add.png"
                        alt=""
                      />
                      <span>{{
                        memberStatus === 0 ? "编辑" : "添加家庭成员"
                      }}</span>
                    </div>
                  </div>
                  <!-- 家庭成员列表展示 -->
                  <div class="member-list common" v-if="memberStatus === 1">
                    <el-form
                      class=""
                      ref="form"
                      v-model="form1.memberList"
                      label-width="0"
                      :rules="rules"
                    >
                      <div
                        class="member-item"
                        v-for="(memberItem, memberIndex) in form1.memberList"
                        :key="memberIndex + '-member'"
                      >
                        <div class="form-item">
                          <div @click="modifyMember" class="mask"></div>
                          <div class="relation">
                            <el-form-item
                              :prop="'memberList.' + memberIndex + '.value'"
                              :rules="rules.value"
                            >
                              <el-select
                                v-model="memberItem.value"
                                placeholder="关系"
                              >
                                <el-option
                                  v-for="(
                                    relation, relationIdx
                                  ) in relationList"
                                  :key="relationIdx"
                                  :label="relation.label"
                                  :value="relation.value"
                                >
                                </el-option>
                              </el-select>
                            </el-form-item>
                          </div>
                          <div class="name">
                            <el-form-item
                              label=""
                              :prop="'memberList.' + memberIndex + '.name'"
                              :rules="rules.name"
                            >
                              <el-input
                                v-model="memberItem.name"
                                placeholder="姓名"
                              ></el-input>
                            </el-form-item>
                          </div>
                          <div class="phone">
                            <el-form-item
                              label=""
                              :prop="'memberList.' + memberIndex + '.phone'"
                              :rules="rules.phone"
                            >
                              <el-input
                                v-model="memberItem.phone"
                                placeholder="联系电话"
                              ></el-input>
                            </el-form-item>
                          </div>
                        </div>
                        <div class="operation">
                          <img
                            class="delete-icon"
                            src="../assets/images/delete.png"
                            alt=""
                          />
                          <span>删除</span>
                        </div>
                      </div>
                    </el-form>
                  </div>
                  <!-- 家庭成员编辑 -->
                  <div
                    v-if="memberStatus === 2"
                    class="common-edit user-info-edit member-edit"
                  >
                    <div style="display: flex; padding-bottom: 20px">
                      <div class="single">
                        <span class="mark">*</span>
                        <el-select
                          v-model="form1.input61"
                          placeholder="关系"
                          style="width: 160px"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                      <div class="single" style="margin: 0 15px">
                        <span class="mark">*</span>
                        <el-input
                          style="width: 160px"
                          placeholder="姓名"
                          v-model="form1.input62"
                        ></el-input>
                      </div>
                      <div class="single">
                        <span class="mark">*</span>
                        <el-input
                          style="width: 296px"
                          placeholder="联系电话"
                          v-model="form1.input63"
                        ></el-input>
                      </div>
                    </div>
                    <div class="save-box">
                      <div class="save-btn" @click="saveMemberStatus">保存</div>
                    </div>
                  </div>
                  <!-- 无紧急联系人信息 -->
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[11]["name"] }}</div>
                    </div>
                    <div
                      v-if="concatStatus !== 2"
                      class="beta hidden"
                      @click="editConcatStatus"
                    >
                      <img
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <span>编辑</span>
                    </div>
                  </div>
                  <!-- 紧急联系人展示 -->
                  <div v-if="concatStatus === 1" class="concat-info common">
                    <div class="mask"></div>
                    <div class="relation">
                      <el-select
                        v-model="form1.concatInfo.value"
                        placeholder="关系"
                      >
                        <el-option
                          v-for="(relation, relationIdx) in relationList"
                          :key="relationIdx"
                          :label="relation.label"
                          :value="relation.value"
                        >
                        </el-option>
                      </el-select>
                    </div>
                    <div class="name">
                      <el-input
                        v-model="form1.concatInfo.name"
                        placeholder="姓名"
                      ></el-input>
                    </div>
                    <div class="phone">
                      <el-input
                        v-model="form1.concatInfo.phone"
                        placeholder="联系电话"
                      ></el-input>
                    </div>
                    <div class="address">
                      <el-input
                        v-model="form1.concatInfo.address"
                        placeholder="联系地址"
                      ></el-input>
                    </div>
                  </div>
                  <!-- 紧急联系人编辑 -->
                  <div
                    v-if="concatStatus === 2"
                    class="common-edit user-info-edit member-edit"
                  >
                    <div style="display: flex; padding-bottom: 20px">
                      <div class="single">
                        <span class="mark">*</span>
                        <el-select
                          v-model="form1.input64"
                          placeholder="关系"
                          style="width: 160px"
                        >
                          <el-option
                            v-for="item in input11List"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          >
                          </el-option>
                        </el-select>
                      </div>
                      <div class="single" style="margin: 0 15px">
                        <span class="mark">*</span>
                        <el-input
                          style="width: 160px"
                          placeholder="姓名"
                          v-model="form1.input65"
                        ></el-input>
                      </div>
                      <div class="single">
                        <span class="mark">*</span>
                        <el-input
                          style="width: 296px"
                          placeholder="联系电话"
                          v-model="form1.input66"
                        ></el-input>
                      </div>
                    </div>
                    <div class="single" style="padding-bottom: 20px">
                      <span class="mark" style="visibility: hidden">*</span>
                      <el-input
                        style="width: 747px"
                        placeholder="联系地址"
                        v-model="form1.input67"
                      ></el-input>
                    </div>
                    <div class="save-box">
                      <div class="save-btn" @click="saveConcatStatus">保存</div>
                    </div>
                  </div>
                  <!-- 无电子附件 -->
                  <div class="item">
                    <div class="alpha">
                      <div class="text">{{ navigationList[12]["name"] }}</div>
                    </div>
                    <div
                      v-if="assessoriesStatus !== 2"
                      class="beta hidden"
                      @click="editAssessoriesStatus"
                    >
                      <img
                        class="edit-icon"
                        src="../assets/images/edit.png"
                        alt=""
                      />
                      <span>编辑</span>
                    </div>
                  </div>
                  <div
                    v-if="assessoriesStatus === 0"
                    style="height: 40px"
                  ></div>
                  <!-- 电子附件展示 -->
                  <div
                    v-if="assessoriesStatus === 1"
                    class="assessories-list common"
                  >
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark">*</span>
                          <span>身份证人像面</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark">*</span>
                          <span>身份证国徽面</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark">*</span>
                          <span>毕业证书</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark">*</span>
                          <span>学位证书</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark hidden">*</span>
                          <span>体检报告</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark hidden">*</span>
                          <span>原单位离职证明</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark hidden">*</span>
                          <span>职称证书</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 编辑电子附件-->
                  <div
                    v-if="assessoriesStatus === 2"
                    class="common-edit assessories-list pd"
                  >
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark">*</span>
                          <span>身份证人像面</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark">*</span>
                          <span>身份证国徽面</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark">*</span>
                          <span>毕业证书</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark">*</span>
                          <span>学位证书</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark hidden">*</span>
                          <span>体检报告</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark hidden">*</span>
                          <span>原单位离职证明</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="assessories-item">
                      <div class="category-info">
                        <div class="alpha">
                          <span class="mark hidden">*</span>
                          <span>职称证书</span>
                        </div>
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleFileSuccess"
                        >
                          <div class="beta">
                            <img
                              class="upload-icon"
                              src="../assets/images/upload.png"
                              alt=""
                            />
                            <span>上传图片</span>
                          </div>
                        </el-upload>
                      </div>
                      <div class="file-list">
                        <div
                          class="file-item"
                          v-for="(item, index) in fileList"
                          :key="index"
                        >
                          <div class="alpha">43840598309845.jpg</div>
                          <div class="beta">
                            <span class="remove-box">
                              <img
                                class="upload-icon"
                                src="../assets/images/delete.png"
                                alt=""
                              />
                              <span>删除</span>
                            </span>
                            <span>
                              <img
                                class="upload-icon"
                                src="../assets/images/upload-reload.png"
                                alt=""
                              />
                              <span>上传图片</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="save-box">
                      <div class="save-btn" @click="saveAssessoriesStatus">
                        保存
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="commit-button">提交履历</div>
            </div>
          </div>
          <login
            ref="login"
            v-if="dialogFormVisible"
            :dialogFormVisible="dialogFormVisible"
            @onCancel="onCancel"
          >
          </login>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 导入组件
import navcon from "@/components/navcon.vue";
import { navigation } from "@/mixins/navigation";
import leftnav from "@/components/leftnav";
import login from "@/components/login";
import datePicker from "@/components/datePicker";
export default {
  mixins: [navigation],
  data() {
    return {
      rules: {
        value: [{ required: true, message: "请选择关系", trigger: "blur" }],
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        phone: [{ required: true, message: "请输入号码", trigger: "blur" }],
      },
      items: null, //分类栏目
      imageUrl: "", // 用户头像上传url
      assUrl: "", //电子附件上传 图片url
      dialogFormVisible: false,
      testList: [{}, {}],
      userInfoStatus: 0, //用户信息状态 3个值 0(无信息) 1 展示状态 2编辑状态
      identityStatus: 0, //
      cardStatus: 0,
      educationStatus: 0,
      professionStatus: 0,
      qualificationStatus: 0,
      hobbyStatus: 0,
      addressStatus: 0,
      telephoneStatus: 0,
      experienceStatus: 0,
      memberStatus: 0,
      concatStatus: 0,
      assessoriesStatus: 0,
      form1: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
        input7: "",
        input8: "",
        input9: "",
        input10: "",
        input11: "",
        input12: "",
        input13: "",
        input14: "",
        input15: "",
        input16: "",
        input17: "",
        input18: "",
        input19: "",
        input20: "",
        input21: "",
        input22: "",
        input23: "",
        input24: "",
        input25: "",
        input26: "",
        input27: "",
        input28: "",
        input29: "",
        input30: "",
        input31: "",
        input32: "",
        input33: "",
        input34: "",
        input35: "",
        input36: "",
        input37: "",
        input38: "",
        input39: "",
        input40: "",
        input41: "",
        input42: "",
        input43: "",
        input44: "",
        input45: "",
        input46: "",
        input47: "",
        input48: "",
        input49: "",
        input50: "",
        input51: "",
        input52: "",
        input53: "",
        input54: "",
        input55: "",
        input56: "",
        input57: "",
        input58: "",
        input59: "",
        input60: "",
        input61: "",
        input62: "",
        input63: "",
        input64: "",
        input65: "",
        input66: "",
        input67: "",
        input68: "",
        input69: "",
        input70: "",
        memberList: [
          {
            value: 1,
            name: "张莫某",
            phone: "1234567892",
          },
          {
            value: 2,
            name: "李莫某",
            phone: "9234567892",
          },
        ],
        concatInfo: {
          value: 2,
          name: "李莫某",
          phone: "9234567892",
          address: "广东省广州市xx区xxx街道",
        },
      },
      fileList: [{}, {}],
      relationList: [
        {
          value: 1,
          label: "父子",
        },
        {
          value: 2,
          label: "父女",
        },
      ],
      marryList: [
        {
          value: "1",
          label: "已婚",
        },
        {
          value: "2",
          label: "未婚",
        },
      ],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
            },
            {
              value: "daohang",
              label: "导航",
            },
          ],
        },
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
            },
            {
              value: "daohang",
              label: "导航",
            },
          ],
        },
      ],
      categoryList: [
        {
          value: "1",
          label: "数据1",
        },
        {
          value: "2",
          label: "数据2",
        },
        {
          value: "3",
          label: "数据3",
        },
      ],
      bloodList: [
        {
          value: "1",
          label: "A型",
        },
        {
          value: "2",
          label: "B型",
        },
        {
          value: "3",
          label: "O型",
        },
      ],
      input11List: [
        {
          value: "1",
          label: "汉族",
        },
        {
          value: "2",
          label: "回族",
        },
        {
          value: "3",
          label: "x族",
        },
      ],
      input12List: [
        {
          value: "1",
          label: "群众",
        },
        {
          value: "2",
          label: "党员",
        },
        {
          value: "3",
          label: "团员",
        },
      ],
      hobbyList: [{}, {}, {}, {}, {}],
    };
  },
  computed: {},
  components: {
    navcon,
    leftnav,
    login,
    datePicker,
  },
  created() {},
  mounted() {
    // 显示登陆弹框
    this.dialogFormVisible = true;

    window.onscroll = ()=> {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let topList = this.getCategoryTopList();
      // console.log(scrollTop);
      if(scrollTop < topList[1]){
        this.$refs['leftnav'].setIndex(0);
      } else if(topList.length > 1){
        for(let i=0;i<topList.length;i++){
          if((topList[i] < scrollTop && scrollTop < topList[i + 1]) || (scrollTop >= topList[topList.length - 1])){
            this.$refs['leftnav'].setIndex(i);
          }
        }
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    // 可对上传文件进行限制
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleFileSuccess(res, file) {
      this.assUrl = URL.createObjectURL(file.raw);
    },
    onTabChange(index) {
      console.log(`点击的下标是：${index}`);
      var items = document.querySelectorAll(".message-list > .item");
      var top = items[index].offsetTop - 131;
      window.scrollTo(0, top);
      // console.log(top);
    },
    // 获取所有类目距离顶部的集合
    getCategoryTopList() {
      var items = [];
      if(this.items){
        items = this.items;
      } else {
        items = document.querySelectorAll(".message-list > .item");
        this.items = items
      }
      var list = [];
      for (let i = 0; i < items.length; i++) {
        // console.log(items[i].offsetTop);
        list.push(items[i].offsetTop - 131);
      }
      // console.log(list);
      return list;
    },
    onCancel() {
      this.dialogFormVisible = false;
    },
    chooseSex(value) {
      this.form1.input3 = value;
    },
    chooseHighest(value) {
      this.form1.input31 = value;
    },
    handleChange(value) {
      console.log(value);
    },
    editUserInfo() {
      this.userInfoStatus = 2;
    },
    saveUserInfo() {
      this.userInfoStatus = 1;
    },
    saveIdentity() {
      this.identityStatus = 1;
    },
    saveCard() {
      this.cardStatus = 1;
    },
    saveEducationStatus() {
      this.educationStatus = 1;
    },
    saveProfessionStatus() {
      this.professionStatus = 1;
    },
    saveQualificationStatus() {
      this.qualificationStatus = 1;
    },
    savehobbyStatus() {
      this.hobbyStatus = 1;
    },
    saveaddressStatus() {
      this.addressStatus = 1;
    },
    savetelephoneStatus() {
      this.telephoneStatus = 1;
    },
    saveExperienceStatus() {
      this.experienceStatus = 1;
    },
    saveMemberStatus() {
      this.memberStatus = 1;
    },
    saveAssessoriesStatus() {
      this.assessoriesStatus = 1;
    },
    saveConcatStatus() {
      this.concatStatus = 1;
    },
    editIdentity() {
      this.identityStatus = 2;
    },
    editCard() {
      this.cardStatus = 2;
    },
    editEducation() {
      this.educationStatus = 2;
    },
    editProfession() {
      this.professionStatus = 2;
    },
    editQualification() {
      this.qualificationStatus = 2;
    },
    edithobby() {
      this.hobbyStatus = 2;
    },
    editAddressStatus() {
      this.addressStatus = 2;
    },
    editTelephoneStatus() {
      this.telephoneStatus = 2;
    },
    editExperienceStatus() {
      this.experienceStatus = 2;
    },
    editMemberStatus() {
      this.memberStatus = 2;
    },
    editConcatStatus() {
      this.concatStatus = 2;
    },
    editAssessoriesStatus() {
      this.assessoriesStatus = 2;
    },
    modifyMember() {
      console.log("编辑家庭成员");
    },
  },
};
</script>

<style lang="less" scoped>
.index-con {
  display: flex;
  flex-direction: column;

  .header {
    width: 100% !important;
  }
}

.main {
  // position: fixed;
  // top: 131px;
  // left: 50%;
  margin: 131px auto 0;

  .main-body {
    display: flex;

    .resume {
      width: 817px;
      margin: 0 0 0 185px;
      .content {
        width: 100%;
        background: #ffffff;
        box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.08);
      }

      .commit-button {
        width: 177px;
        height: 39px;
        line-height: 39px;
        background: #b91a1c;
        font-size: 16px;
        color: #ffffff;
        margin: 41px auto 64px;
        text-align: center;
      }
    }
  }

  .message-list {
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 36px 15px 21px;
      background: #ffffff;
      cursor: pointer;
      margin: 13px 0 0;

      /* box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0); */
      .alpha {
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;

        .text {
          padding: 0 0 0 9px;
          line-height: 20px;
          border-left: 4px solid #b91a1c;
        }
      }

      .beta {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #e53e27;
        height: 16px;
      }

      .hidden {
        visibility: hidden;
      }

      .edit-icon {
        width: 12px;
        height: 12px;
        margin: 0 3px 0 0;
      }

      .add-icon {
        width: 14px;
        height: 14px;
        margin: 0 3px 0 0;
      }
    }

    .item:hover {
      box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.09);
    }

    .item:hover .beta {
      visibility: visible;
    }

    .common {
      margin: 0 36px;
    }

    .user-info {
      display: flex;
      padding: 9px 0 17px;

      .header-img {
        width: 74px;
        height: 74px;
        border-radius: 50%;
        margin: 0 14px 0 0;
      }

      .message {
        .name {
          font-size: 32px;
          font-weight: 500;
          line-height: 45px;
        }

        .base {
          color: #999999;
          line-height: 22px;

          .line {
            padding: 0 2px;
          }
        }
      }
    }

    .common-edit {
      background: #fbfbfb;
      padding: 0 40px 0 32px;
    }

    .label-box {
      margin: 0 0 10px;

      .mark {
        color: #e53e27;
      }

      .label {
        color: #5b5b5b;
      }

      .hidden {
        visibility: hidden;
      }
    }

    .save-box {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
    }

    .save-btn {
      width: 85px;
      height: 39px;
      line-height: 39px;
      text-align: center;
      color: #fff;
      background: #b91a1c;
      cursor: pointer;
    }

    .user-info-edit {
      display: flex;
      justify-content: space-between;
      padding-top: 24px;
      padding-bottom: 25px;
      flex-wrap: wrap;

      .alpha {
        width: 222px;

        .images-box {
          .upload {
            display: flex;
            align-items: center;
            width: 135px;
            height: 172px;
            background: #ffffff;
            box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
            margin: 0 0 10px 41px;
            .avatar {
              width: 100%;
            }
          }

          .tip {
            font-size: 14px;
            color: #c0c0c0;
            line-height: 24px;
          }
        }
      }

      .align {
        width: 222px;

        .form-item {
          margin: 0 0 30px;

          .radio-list {
            display: flex;

            .sex-item {
              /* width: 105px; */
              flex: 1;
              height: 39px;
              line-height: 39px;
              background: #ffffff;
              border: 1px solid #dcdcdc;
              color: #c0c0c0;
              text-align: center;
              cursor: pointer;
            }

            .active {
              border: 1px solid #0b6fd8;
              background: rgba(11, 111, 216, 0.09);
              color: #0b6fd8;
            }
          }
        }
      }

      .right-align {
        width: 485px;
        margin: 0 0 0 38px;
      }

      .beta-box {
        display: flex;
        justify-content: space-between;
        width: 100%;

        .flex-1 {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          flex: 1;
        }
      }
    }
    .address-edit {
      padding: 18px 40px 21px 19px;
      .line-form-item {
        flex: 1;
        height: 39px;
        background: #ffffff;
      }
    }
    .member-edit {
      padding: 16px 40px 12px 19px;
    }
    .identity-info {
      padding: 6px 0 24px;
      font-size: 18px;
      line-height: 25px;

      .card-number {
        padding: 0 20px;
      }
    }

    .card-info {
      padding: 10px 0 24px;
      font-size: 18px;
      line-height: 25px;

      .card-number {
        padding: 0 20px;
      }
    }

    .project-list {
      .project-item {
        padding: 8px 0 12px 21px;
        margin: 0 0 16px;
        cursor: pointer;

        .alpha {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 0 6px;

          .message {
            font-size: 18px;
            display: flex;
            align-items: center;

            .time {
              color: #c0c0c0;
              padding: 0 0 0 22px;
            }

            .tag {
              padding: 2px 8px;
              background: #c0c0c0;
              border-radius: 10px;
              font-size: 10px;
              color: #fff;
              margin: 0 0 0 17px;
            }

            .first-tag {
              background: #b91a1c;
            }
          }

          .operation {
            display: none;
            font-size: 12px;
            color: #0b6fd8;
            padding: 0 16px;
            line-height: 12px;
            height: 12px;

            .delete-icon {
              width: 13px;
              height: 12px;
              vertical-align: bottom;
            }
          }
        }

        .beta {
        }
      }

      .project-item:hover {
        box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.09);
      }

      .project-item:hover .operation {
        display: block;
      }
    }

    .hobby-list {
      display: flex;
      flex-wrap: wrap;
      padding: 13px 0 0;

      .hobby-item {
        display: flex;
        align-items: center;
        width: 171px;
        margin: 0 15px 20px 0;
        cursor: pointer;

        .hobby-content {
          width: 121px;
          height: 37px;
          line-height: 37px;
          text-align: center;
          border: 1px solid #dcdcdc;

          .title {
            // padding: 0 0 0 11px;
          }
        }

        .operation {
          display: none;
          width: 41px;
          font-size: 12px;
          color: #0b6fd8;
          padding: 0 0 0 7px;
          line-height: 12px;
          height: 12px;
          white-space: nowrap;

          .delete-icon {
            width: 13px;
            height: 12px;
            vertical-align: bottom;
          }
        }
      }

      .hobby-item:hover .hobby-content {
        box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.09);
      }

      .hobby-item:hover .operation {
        display: block;
      }
    }

    .address-list {
      padding: 9px 0 0;

      .address-item {
        height: 39px;
        line-height: 39px;
        border: 1px solid #dcdcdc;
        margin: 0 0 16px;
        padding: 0 14px;
      }
    }

    .member-list {
      padding: 17px 0 5px;

      .member-item {
        display: flex;
        height: 39px;
        margin: 0 0 20px;
        cursor: pointer;

        .form-item {
          display: flex;
          position: relative;

          .mask {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 1;
            opacity: 0;
          }
        }

        .relation {
          width: 160px;
          margin: 0 30px 0 0;
        }

        .name {
          width: 160px;
          margin: 0 30px 0 0;
        }

        .phone {
          width: 296px;
          margin: 0 28px 0 0;
        }

        .operation {
          // display: none;
          font-size: 12px;
          color: #0b6fd8;
          // padding: 0 16px;
          line-height: 12px;
          height: 12px;
          margin: 12px 0 0;

          .delete-icon {
            width: 13px;
            height: 12px;
            vertical-align: bottom;
          }
        }
      }
    }

    .concat-info {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      padding: 17px 0 18px;

      .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        opacity: 0;
      }

      .relation {
        width: 160px;
        margin: 0 30px 0 0;
      }

      .name {
        width: 160px;
        margin: 0 30px 0 0;
      }

      .phone {
        width: 296px;
        margin: 0 28px 0 0;
      }

      .address {
        width: 747px;
        margin: 17px 0 0;
      }
    }

    .pd {
      padding: 0 36px 25px 36px;
    }

    .assessories-list {
      padding-top: 13px;
      padding-bottom: 31px;
      .assessories-item {
        padding: 0 0 19px;

        .hidden {
          visibility: hidden;
        }

        .upload-icon {
          width: 14px;
          height: 14px;
          vertical-align: bottom;
          margin: 0 1px 0 0;
        }

        .category-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 39px;
          border: 1px solid #dcdcdc;
          padding: 0 11px;
          cursor: pointer;
          background: #fff;

          .alpha {
            .mark {
              color: #b91a1c;
            }
          }

          .beta {
            display: none;
            font-size: 12px;
            color: #e53e27;
          }
        }

        .file-list {
          padding: 12px 0 0;

          .file-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #0b6fd8;
            padding: 0 0 9px;
            cursor: pointer;

            .alpha {
            }

            .beta {
              display: none;
              font-size: 12px;

              .remove-box {
                padding: 0 23px 0 0;
              }
            }
          }

          .file-item:hover .beta {
            display: block;
          }
        }

        // .file-list:hover .beta {
        //   display: block;
        // }

        .category-info:hover {
          box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.09);
        }

        .category-info:hover .beta {
          display: block;
        }
      }
    }
    .single {
      display: flex;
      align-items: center;
      .mark {
        color: #e53e27;
        padding: 0 6px 0 0;
      }
    }
  }
}
</style>