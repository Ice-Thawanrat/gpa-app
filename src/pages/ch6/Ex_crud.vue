<!-- CRUD: คือคำว่า create, read, update, delete รวมกัน -->
<template>
  <q-page class="q-pa-md bg-gray-1">
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-5">
        <q-card flat bordered>
          <q-card-section class="bg-primary text-white">
            <div class="text-subtitle1 text-weight-medium">HTTP Methods</div>
          </q-card-section>

          <q-list separator>
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-blue"> 1. Get: List All </q-item-label>
              </q-item-section>

              <!-- ให้ปุ่มอยู่ขวา -->
              <q-item-section side>
                <q-btn color="blue" label="Fetch All" @click="handleFetchAll" :loading="isLoading">
                </q-btn>
              </q-item-section>
            </q-item>

            <!-- 2 -->
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-green">
                  2. Create: ID: 101
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn color="green" label="Create Post" @click="handleCreate" :loading="isLoading">
                </q-btn>
              </q-item-section>
            </q-item>

            <!-- 3 -->
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-orange"> 3. Update ID: 1</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn color="orange" label="Update" @click="handleUpdate" />
              </q-item-section>
            </q-item>

            <!-- delete -->
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-red"> 4. Delete ID: 1</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn color="red" label="Delete" @click="handleDelete(1)" />
              </q-item-section>
            </q-item>

            <!-- filter -->
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-purple">
                  5. Filter User ID: 2</q-item-label
                >
              </q-item-section>
              <q-item-section side>
                <q-btn
                  color="purple"
                  label="Filter User 2"
                  @click="handleFilter(2)"
                  :loading="isLoading"
                />
              </q-item-section>
            </q-item>

            <!-- comment -->
            <q-item>
              <q-item-section>
                <q-item-label class="text-weight-bold text-teal"> 6. Comments</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-btn color="teal" label="Comments" @click="handleComments(1)" />
              </q-item-section>
            </q-item>

            <!--  -->
          </q-list>
        </q-card>
      </div>

      <!-- แถบขวา -->
      <div class="col-12 col-md-7">
        <q-card flat bordered>
          <q-card-section class="bg-grey-9 text-white row justify-between items-center q-py-xs">
            <div class="text-subtitle2">
              <q-icon name="terminal" />
              Live UI Data Monitor
            </div>
            <div class="text-caption text-grey-4">Total: {{ postItem.length }} records</div>
          </q-card-section>

          <q-card-section v-if="isLoading" class="text-center q-pa-xl">
            <q-spinner-netrix color="primary" size="3rem"></q-spinner-netrix>
            <div class="q-mt-sm text-gray-6">Syncing data with server...</div>
          </q-card-section>

          <!-- แสดงเนื้อหา ตรวจสอบโดยใช้ v-if  -->
          <q-card-section v-else>
            <div v-if="comments.length > 0" class="q-mb-md">
              <q-banner dense class="bg-teal-1 text-teal-9 rouned-border q-mb-sm">
                <q-icon name="comment">Comment of Post ID: 1</q-icon>

                <template v-slot:action>
                  <q-btn flat label="Close Comments" color="teal" @click="comments = []" />
                </template>
              </q-banner>
              <q-list bordered separator class="bg-white rounded-borders">
                <q-item v-for="comment in comments" :key="comment.id">
                  <q-item-section>
                    <q-item-label class="text-weight-bold">
                      {{ comment.name }} ({{ comment.email }})
                    </q-item-label>
                    <q-item-label caption>{{ comment.body }} </q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            <div v-if="postItem.length == 0" class="text-center" q-pa-xl text-gray-5>
              <q-icon name="layers_clear" size="4rem"></q-icon>
              <div class="text-h6" q-mt-sm>No Data</div>
            </div>
            <div v-else class="row q-col-gutter-sm">
              <div v-for="item in postItem.slice(0, 6)" :key="item.id" class="col-12 col-sm-6">
                <q-card flat bordered class="bg-white text-dark">
                  <q-card-section class="q-pa-sm">
                    <q-badge :color="item.id > 100 ? 'green' : 'blue'" class="qmb-xs">
                      ID: {{ item.id }}</q-badge
                    >
                    <q-badge color="purple" class="q-ml-xs"> User: {{ item.userId }}</q-badge>
                    <div class="text-weight-bold text-subtitle2">{{ item.title }}</div>
                    <div class="text-caption text-gray-7 q-mt-xs">{{ item.body }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { usePostStore } from '@/stores/post-store'
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { storeToRefs } from 'pinia'

const $q = useQuasar()
const store = usePostStore()
const { postItem, isLoading } = storeToRefs(store)
const comment = ref([])
const comments = ref([])

const handleFetchAll = async () => {
  comment.value = []
  await store.fetchAllPosts()
  $q.notify({
    type: 'positive',
    message: 'Data fetched success',
    position: 'bottom-right',
  })
}

const handleCreate = async () => {
  const newPostData = {
    title: 'new post',
    body: 'body of new post',
    userId: 999,
  }
  await store.createNewPost(newPostData)
  $q.notify({
    type: 'positive',
    message: 'Data fetched success',
    position: 'cloud_done',
  })
}

const handleUpdate = async () => {
  const newPostData = {
    title: 'new post2',
    body: 'body of new post2',
    userId: 900,
  }
  await store.updatePost(1, newPostData)
  $q.notify({
    type: 'warning',
    message: 'Post updated successfully!',
    icon: 'sync',
  })
}

const handleDelete = async (id) => {
  await store.deletePost(id)
  $q.notify({
    type: 'negative',
    message: `Deleted ID: ${id} successfully!`,
    icon: 'delete',
  })
}

const handleFilter = async (userId) => {
  comments.value = []
  await store.filterPost(userId)
  $q.notify({
    color: 'purple',
    textcolor: 'white',
    message: `Filter ID: ${userId} successfully`,
    icon: 'filter_list',
  })
}

const handleComments = async (id) => {
  const commentList = await store.fetchComments(id)
  if (commentList) {
    comments.value = commentList
  }
  $q.notify({
    type: 'positive',
    message: `Comment ID: ${id} successfully!`,
    icon: 'forum',
  })
}
</script>
