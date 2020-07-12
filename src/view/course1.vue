<template>
    <div>
        <Upload :action="action" :before-upload="handleUpload">
            <Button icon="ios-cloud-upload-outline">Upload files</Button>
        </Upload>
        <Audio src="" ref="myAudio" controls></Audio>
    </div>
</template>
<script>
export default {
    name: 'course1',
    data(){
        return {
            action: ''
        }
    },
    methods:{
        // 文件上传前触发
        handleUpload(file){
            // this.audioHandler(file)
            this.textHndler(file)
            return false
        },
        // 音频文件分片、合并、播放
        audioHandler(file){
            // 分片大小设置为100kb
            const size = 100 * 1000
            // 存放分片的数组
            let blobArr = []
            // 文件可被分片的数量
            let count = Math.ceil(file.size / size)
            // 记录分片开始的下标
            let startIdx = 0
            // 开始分片操作
            for (let index = 0; index < count; index++) {
                let blob;
                if (index != count -1) {
                    blob = file.slice(startIdx,startIdx+size)
                    startIdx = startIdx + size
                }else{
                    blob = file.slice(startIdx,file.size)
                }
                blobArr.push(blob)
            }
            // 利用Blob构造函数，将拆分的blob合并起来，
            let newBlob = new Blob(blobArr,{
                type:"audio/mpeg"
            })
            // 将合并的新blob生成一个Url，并指向audio播放，如果能完全正常播放，则说明分片和合并这整个流程是成功的
            let url = URL.createObjectURL(newBlob);
            this.$refs.myAudio.src = url
        },
        // 利用FileReader，读取txt文件中的文本
        textHndler(file){
            let fileReader = new FileReader()
            fileReader.onload = function () {
                console.log(fileReader.result)
                
            }
            fileReader.readAsText(file)
        }
    }
}
</script>