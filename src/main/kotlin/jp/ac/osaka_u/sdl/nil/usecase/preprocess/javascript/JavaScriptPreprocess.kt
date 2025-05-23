package jp.ac.osaka_u.sdl.nil.usecase.preprocess.javascript

import io.reactivex.rxjava3.core.Flowable
import io.reactivex.rxjava3.kotlin.toFlowable
import jp.ac.osaka_u.sdl.nil.NILConfig
import jp.ac.osaka_u.sdl.nil.entity.CodeBlock
import jp.ac.osaka_u.sdl.nil.usecase.preprocess.Preprocess
import java.io.File

class JavaScriptPreprocess(private val config: NILConfig) : Preprocess(config.threads) {
    override fun collectSourceFiles(dir: File): Flowable<File> =
        dir.walk()
            .filter {
                it.isFile &&
                        (it.toString().endsWith(".js"))
            }
            .toFlowable()

    override fun collectBlocks(srcFile: File): Flowable<CodeBlock> =
        Flowable.just(srcFile)
            .flatMap { JavaScriptTransformer(config).extractBlocks(it) }
}
