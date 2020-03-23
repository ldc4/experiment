<template>
<div class="soda-quill-editor">
    <div ref="toolbarArea">
        <span class="ql-formats">
            <button class="ql-bold"></button>
            <button class="ql-italic"></button>
            <button class="ql-strike"></button>
            <select class="ql-color"></select>
            <select class="ql-background"></select>
            <select class="ql-align"></select>
        </span>
        <span class="ql-formats">
            <button class="ql-clean"></button>
        </span>
    </div>
    <div ref="editorArea">
        <div v-html="content"></div>
    </div>
</div>
</template>

<script>
import Quill from 'quill';
import debounce from 'lodash/debounce';
import 'quill/dist/quill.snow.css';

// 处理字体选项
const fontSizeStyle = Quill.import('attributors/style/size');
fontSizeStyle.whitelist = ['12px', '14px', '16px', '20px', '24px', '28px', '34px', '60px'];
Quill.register(fontSizeStyle, true);

export default {
    // name: '',
    // components: {},
    // directives: {},
    // filters: {},
    props: {
        value: {
            type: String,
            default: null,
        },
        // 更多options
        options: {
            type: Object,
            default: null,
        }
    },
    data() {
        return {
            quill: null
        };
    },
    computed: {
        content: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        }
    },
    watch: {},
    // beforeCreate() {},
    created() {
    },
    // beforeMount() {},
    mounted() {
        const defaultOptions = {
            theme: 'snow',
            placeholder: '请输入...',
            modules: {
                toolbar: this.$refs.toolbarArea
            }
        };
        this.quill = new Quill(this.$refs.editorArea, Object.assign(defaultOptions, this.options));
        this.quill.on('text-change', debounce((delta, oldDelta, source) => {
            this.content = this.quill.root.innerHTML;
        }, 1000));
    },
    // beforeUpdate() {},
    // updated() {},
    // beforeDestroy() {},
    // destroyed() {},
    methods: {
        // 手动更新 value 为传入值
        updateContent() {
            this.$nextTick(() => {
                this.quill.root.innerHTML = this.content;
            });
        }
    }
};
</script>

<style lang="less">
.soda-quill-editor {
    margin-top: 20px;
    position: relative;
    font-size: 12px;
    .ql-toolbar {
        position: absolute;
        z-index: 100;
        left: 10px;
        top: -10px;
        width: 210px;
        font-family: inherit;
        border: none;
        padding: 0;
        font-size: 0;
        white-space: nowrap;
        .ql-formats {
            margin: 0;
            padding-left: 4px;
            padding-right: 4px;
            border: 1px solid #e5e5e5;
            margin-top: -1px;
            margin-left: -1px;
            background: #fff;
        }
        button,
        select {
            outline: none;
            height: 20px;
            width: 22px;
            .ql-picker-label {
                padding: 3px 4px;
            }
        }
        .ql-size,
        .ql-color,
        .ql-background,
        .ql-align {
            height: 20px;
            width: 22px;
            .ql-picker-label {
                border: none;
                outline: none;
                padding: 2px 3px;
            }
        }
        .ql-size {
            width: 45px;
            margin-left: -5px;
            margin-right: -5px;
            .ql-picker-label {
                padding-left: 9px;
                padding-right: 0;
                font-size: 0;
                &::before {
                    font-size: 12px;
                    line-height: 18px;
                }
                svg {
                    width: 12px;
                    margin-top: -6px;
                    margin-right: 4px;
                }
            }
        }
        .ql-clean {
            margin-left: -3px;
            margin-right: -2px;
        }
        .ql-picker.ql-expanded {
            .ql-picker-options {
                margin-top: 0;
                border-color: #e5e5e5;
                box-shadow: none;
                .ql-picker-item {
                    font-size: 12px;
                    padding-bottom: 3px;
                    padding-top: 3px;
                }
            }
        }
    }
    .ql-container {
        font-family: inherit;
        font-size: inherit;
        border: 1px solid #e5e5e5 !important;
    }
    .ql-editor {
        padding: 15px;
    }
}
</style>